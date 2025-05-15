export interface Dictionary {
  language: string;
  developerInfo: {
    fullName: string;
    profession: string;
    experience: string;
    location: string;
    CTAButtonText: string;
  };
  celebrations: {
    birthday: {
      title: string;
      line1: string;
      line2: string;
      footer: string;
    };
    nowruz: {
      title: string;
      line1: string;
      line2: string;
      footer: string;
    };
    christmas: {
      title: string;
      line1: string;
      line2: string;
      footer: string;
    };
  };
  impact: {
    title: string;
    filter: {
      all: string;
      opensource: string;
      corporate: string;
      crypto: string;
      startups: string;
    };
    'react-global': {
      title: string;
      description: string;
      stats: {
        sites: string;
        popularity: string;
      };
    };
    'airbnb-standards': {
      title: string;
      description: string;
      stats: {
        users: string;
        stars: string;
      };
    };
    coinlens: {
      title: string;
      description: string;
      stats: {
        users: string;
        volume: string;
      };
    };
    digimenu: {
      title: string;
      description: string;
      stats: {
        users: string;
        orders: string;
      };
    };
  };
  references: {
    title: string;
    leila: {
      text: string;
      by: string;
    };
    ali: {
      text: string;
      by: string;
    };
    eslaminejad: {
      text: string;
      by: string;
    };
  };
} 