type ContactType = {
    id?:string,
    createAt?: number,
    first?: string,
    last?: string,
    avatar?: string,
    twitter?: string,
    notes?: string,
    favorite?: boolean,
  };

  export default ContactType;