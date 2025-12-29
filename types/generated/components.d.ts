import type { Schema, Struct } from '@strapi/strapi';

export interface AccorAcoordian extends Struct.ComponentSchema {
  collectionName: 'components_accor_acoordians';
  info: {
    displayName: 'acoordian';
    icon: 'bold';
  };
  attributes: {
    link: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CardCardwithlogo extends Struct.ComponentSchema {
  collectionName: 'components_card_cardwithlogos';
  info: {
    displayName: 'cardwithlogo';
    icon: 'crop';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CardSimpleCard extends Struct.ComponentSchema {
  collectionName: 'components_card_simple_cards';
  info: {
    displayName: 'simpleCard';
  };
  attributes: {
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CompanyCompany extends Struct.ComponentSchema {
  collectionName: 'components_company_companies';
  info: {
    displayName: 'company';
    icon: 'crown';
  };
  attributes: {
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Schema.Attribute.String;
    label: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    FooterTabs: Schema.Attribute.Component<'nav.nav-link', true>;
    label: Schema.Attribute.String;
  };
}

export interface HeaderHeaderBanner extends Struct.ComponentSchema {
  collectionName: 'components_header_header_banners';
  info: {
    displayName: 'Header Banner';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isVisible: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface NavNavItem extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_items';
  info: {
    displayName: 'Nav Item';
  };
  attributes: {
    dropdownItems: Schema.Attribute.Component<'nav.nav-link', true>;
    hasDropdown: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavNavLink extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_links';
  info: {
    displayName: 'Nav Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface QuoteQuote extends Struct.ComponentSchema {
  collectionName: 'components_quote_quotes';
  info: {
    displayName: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    position: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TabsTabs extends Struct.ComponentSchema {
  collectionName: 'components_tabs_tabs';
  info: {
    displayName: 'tabs';
  };
  attributes: {
    company: Schema.Attribute.Component<'company.company', true>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accor.acoordian': AccorAcoordian;
      'card.cardwithlogo': CardCardwithlogo;
      'card.simple-card': CardSimpleCard;
      'company.company': CompanyCompany;
      'footer.footer': FooterFooter;
      'header.header-banner': HeaderHeaderBanner;
      'nav.nav-item': NavNavItem;
      'nav.nav-link': NavNavLink;
      'quote.quote': QuoteQuote;
      'tabs.tabs': TabsTabs;
    }
  }
}
