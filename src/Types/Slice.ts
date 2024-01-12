export interface dataProps {
  id: number;
  user: string;
  age: number;
  create_at: string;
}

export interface errorProps {
  code: string;
  message: string;
}

export interface initialStateProps {
  data: dataProps[];
  error: errorProps;
}
