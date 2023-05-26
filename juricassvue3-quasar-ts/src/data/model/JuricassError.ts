import { v4 as uuidv4 } from 'uuid';

export default class JuricassError {
  id: string;
  message: string;

  constructor(data: { message?: string } = {}) {
    this.id = uuidv4();
    this.message = data?.message ?? 'An unknown error occured';
  }
}
