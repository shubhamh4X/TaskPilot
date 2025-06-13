export interface Task {
  _id?: string;
  title: string;
  status: 'pending' | 'done';
  userId: string;
}
