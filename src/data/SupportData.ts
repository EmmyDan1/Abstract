type Step = {
  title: string;
  subpoints?: string[];
};

export type supportDataType = {
  id: string;
  tabTitle: string;
  subtitle?: string;
  steps?: Step[];
  content?: string;
  cardText?: string;
};

export const supportData: supportDataType[] = [
  {
    id: "contact-support",
    tabTitle: "Contact support",
    subtitle: "Ask questions about subscriptions and billing",
    steps: [
      {
        title: "While signed in to Abstract, select the Support icon.",
        subpoints: [
          "If you're in the Abstract web app, the Support icon is in the lower left corner.",
          "If you're in the Abstract Desktop app, the Support icon is in the upper right corner.",
        ],
      },
      { title: "Select Contact Support." },
      {
        title:
          "On the Contact Support page, choose the Topic you want to contact Support about, write a Subject for your message, and enter a Description of your issue.",
      },
      {
        title:
          "If you have files you want to give Support, such as bug reports or screenshots, click Browse files... and choose them from your computer.",
      },
      { title: "When you're done, click Send to Support." },
    ],
  },

  {
    id: "subscriptions",
    tabTitle: "Ask questions about subscriptions and billing",
    subtitle: "Manage your subscriptions and payment methods",
    cardText:
      "Admins can manage and update billing information on behalf of their Organization directly from the web app, including adding more contributor seats, managing billing details, and locating invoices.",
    content:
      "For security purposes, Support can only assist with billing matters if you are an admin or can provide credit card information to verify your identity. If you want to use card information to verify your identity, you need to provide: a valid credit card number, expiration date, and security code.",
  },

  {
    id: "sales",
    tabTitle: "Make a sales inquiry",
    subtitle: "Make a sales inquiry",
    content:
      "Interested in enterprise pricing or custom sales solutions? Reach out to our team here.Are you a software reseller? Please get in touch with our Sales TeamIf youre part of an Enterprise plan and want to discuss an upcoming renewal, please contact your customer success manager directly ",
  },
];
