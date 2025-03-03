export interface CSATPlan {
  title: string;
  subtitle: string;
  cost: string;
  currentCost: string;
  likes: string;
  open: boolean;
}

export interface Note {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  likes: number;
}

export interface SubmittedAnswer {
  id: number;          // Unique identifier for the answer
  title: string;       // Title of the answer
  date: string;        // Date of submission (in string format)
  content: string;     // Content of the answer
}
