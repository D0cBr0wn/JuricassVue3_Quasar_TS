export class JudilibreApiService {
  private apiKey: string;
  private baseUrl: string;

  constructor(
    baseUrl: string = import.meta.env.VITE_BASE_URL,
    apiKey: string = import.meta.env.VITE_API_KEY
  ) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  fetch = async (
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    method: string = 'GET',
    data?: unknown,
    headersParams: Record<string, string> = {}
  ): Promise<any> => {
    // Set headers
    const headers = this.setHeader(headersParams);

    // Fetch
    try {
      const body = JSON.stringify(data);
      headers['content-type'] = 'application/json';

      const res = await fetch(this.baseUrl + url, { method, headers, body });
      return await this.handleResponseServer(res);
    } catch (error) {
      throw error;
    }
  };

  private setHeader = (headersParams: Record<string, string>) => {
    const h: Record<string, string> = {
      // 'Access-Control-Allow-Credentials': true,
      // 'Access-Control-Allow-Origin': '*',
      KeyId: this.apiKey,
      ...headersParams,
    };
    return h;
  };

  /**
   * Manage response from server
   * @param {Response} res
   * @returns
   */
  private handleResponseServer = async (res: Response) => {
    // Response
    const contentType = res.headers.get('content-type');
    const jsonType =
      contentType &&
      contentType.includes('application/json') &&
      !contentType.includes('text/plain');

    let result: any;
    if (res.status === 401) {
      throw res.statusText;
    }
    if (res.status === 204) return true;
    else {
      result = await (jsonType ? res.json() : res.text());
      // Fetch Error
      if (!res.status.toString().startsWith('20')) {
        // Create error message
        let error;
        // error from bdd
        if (result.validationErrors) {
          error = Object.entries(result.validationErrors)
            .map(([key, val]) => `${key} ${typeof val !== 'object' ? val : ''}`)
            .join('\r\n');
        } else {
          // handle undefined error
          error = Object.entries(typeof result === 'object' ? result : [result])
            .filter(([k, v]) => {
              if (v && typeof v === 'object')
                return Object.entries(v)
                  .map(
                    ([key, val]) =>
                      `${key} ${
                        typeof val !== 'object' ? val.toLowerCase() : ''
                      }.`
                  )
                  .join('\r\n');
              else return v ? `${v}.` : '';
            })
            .join('\r\n');
        }

        // Set message error
        error = error || res.statusText || `Error ${res.status}`;

        // Throw error
        throw error;
      }

      // Fetch Success
      return result || true;
    }
  };
}

export default { JudilibreApiService };
