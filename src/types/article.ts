export interface Article {
  id: string;                  
  title: string;
  sub_title?: string | null;
  cover_img?: string | null;    
  discription: string;

  heading_01?: string | null;
  paragraph_01?: string | null;
  heading_02?: string | null;
  paragraph_02?: string | null;
  heading_03?: string | null;
  paragraph_03?: string | null;
  quoter?: string | null;
  quotes?: string | null;

  summary: string;
  created_at: string;           
  updated_at: string;
  read_time: string;
  magazine : string;
  author : {
    image : string;
    first_name : string;
    last_name : string;
  }
}
