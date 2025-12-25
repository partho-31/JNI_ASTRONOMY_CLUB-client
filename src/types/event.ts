export interface Event {
  id: string;                       
  type: string;
  title: string;
  description: string;
  image?: string | null;            
  location: string;
  start_time: string;                
  end_time: string;                 
  registration_link?: string | null;

  created_at: string;                
  updated_at: string;             
              
}
