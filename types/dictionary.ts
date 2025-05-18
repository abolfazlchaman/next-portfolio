export interface ImpactData {
  title: string;
  description: string;
  stats: Record<string, string>;
}

export interface Dictionary {
  language: string;
  developerInfo: {
    fullName: string;
    slogan: string;
    profession: string;
    experience: string;
    location: string;
    aboutCTA: string;
    impactCTA: string;
  };
  about: {
    title: string;
    description: string;
    buttonTextEn: string;
    buttonTextFa: string;
    buttonTextDe: string;
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
      emojiLine: string;
      footer: string;
    };
    christmas: {
      title: string;
      line1: string;
      footer: string;
    };
  };
  impact: {
    title: string;
    subtitle: string;
    sources: string;
    filter: {
      all: string;
      opensource: string;
      corporate: string;
      crypto: string;
      startups: string;
    };
    'react-global': ImpactData;
    'airbnb-standards': ImpactData;
    coinlens: ImpactData;
    digimenu: ImpactData;
    'teams-impact': ImpactData;
    'user-impact': ImpactData;
  };
  references: {
    title: string;
    leila: {
      text: string;
      by_name: string;
      by_title: string;
    };
    ali: {
      text: string;
      by_name: string;
      by_title: string;
    };
    eslaminejad: {
      text: string;
      by_name: string;
      by_title: string;
    };
  };
} 