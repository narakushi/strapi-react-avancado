import type { Struct, Schema } from '@strapi/strapi';

export interface PageTechIcons extends Struct.ComponentSchema {
  collectionName: 'components_page_tech_icons';
  info: {
    displayName: 'techIcons';
    icon: 'code';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_page_social_links';
  info: {
    displayName: 'socialLinks';
    icon: 'oneToMany';
  };
  attributes: {
    title: Schema.Attribute.Enumeration<
      ['Github', 'Twitter', 'Drbble', 'LinkedIn', 'Facebook']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Twitter'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSectionTech extends Struct.ComponentSchema {
  collectionName: 'components_page_section_teches';
  info: {
    displayName: 'sectionTech';
    icon: 'code';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 45;
      }>;
    techIcons: Schema.Attribute.Component<'page.tech-icons', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 5;
          max: 10;
        },
        number
      >;
  };
}

export interface PageSectionReviews extends Struct.ComponentSchema {
  collectionName: 'components_page_section_reviews';
  info: {
    displayName: 'sectionReviews';
    icon: 'star';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    reviews: Schema.Attribute.Component<'page.reviews', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 4;
        },
        number
      >;
  };
}

export interface PageSectionModules extends Struct.ComponentSchema {
  collectionName: 'components_page_section_modules';
  info: {
    displayName: 'sectionModules';
    icon: 'server';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    modules: Schema.Attribute.Component<'page.modules', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
  };
}

export interface PageSectionFaq extends Struct.ComponentSchema {
  collectionName: 'components_page_section_faqs';
  info: {
    displayName: 'sectionFaq';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    faqs: Schema.Attribute.Component<'page.faqs', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
  };
}

export interface PageSectionConcepts extends Struct.ComponentSchema {
  collectionName: 'components_page_section_concepts';
  info: {
    displayName: 'sectionConcepts';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    concepts: Schema.Attribute.Component<'page.concepts', true>;
  };
}

export interface PageSectionAgenda extends Struct.ComponentSchema {
  collectionName: 'components_page_section_agenda';
  info: {
    displayName: 'sectionAgenda';
    icon: 'calendar';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface PageSectionAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_page_section_aboutuses';
  info: {
    displayName: 'sectionAboutUs';
    icon: 'user';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    authors: Schema.Attribute.Relation<'oneToMany', 'api::author.author'>;
  };
}

export interface PageSectionAboutProject extends Struct.ComponentSchema {
  collectionName: 'components_page_section_about_projects';
  info: {
    displayName: 'sectionAboutProject';
    icon: 'information';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface PageReviews extends Struct.ComponentSchema {
  collectionName: 'components_page_reviews';
  info: {
    displayName: 'reviews';
    icon: 'discuss';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PagePricingBox extends Struct.ComponentSchema {
  collectionName: 'components_page_pricing_boxes';
  info: {
    displayName: 'pricingBox';
    icon: 'priceTag';
  };
  attributes: {
    totalPrice: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<549>;
    numberInstallments: Schema.Attribute.Integer & Schema.Attribute.Required;
    priceInstallment: Schema.Attribute.Integer & Schema.Attribute.Required;
    benefits: Schema.Attribute.Blocks & Schema.Attribute.Required;
    button: Schema.Attribute.Component<'page.button', false> &
      Schema.Attribute.Required;
  };
}

export interface PageModules extends Struct.ComponentSchema {
  collectionName: 'components_page_modules';
  info: {
    displayName: 'modules';
    icon: 'dashboard';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface PageItens extends Struct.ComponentSchema {
  collectionName: 'components_page_itens';
  info: {
    displayName: 'itens';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface PageHeader extends Struct.ComponentSchema {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'header';
    icon: 'house';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'React Avan\u00E7ado'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    button: Schema.Attribute.Component<'page.button', false>;
    image: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface PageFaqs extends Struct.ComponentSchema {
  collectionName: 'components_page_faqs';
  info: {
    displayName: 'faqs';
    icon: 'message';
    description: '';
  };
  attributes: {
    questions: Schema.Attribute.String & Schema.Attribute.Required;
    answers: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface PageContent extends Struct.ComponentSchema {
  collectionName: 'components_page_contents';
  info: {
    displayName: 'content';
    icon: 'stack';
  };
  attributes: {
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageConcepts extends Struct.ComponentSchema {
  collectionName: 'components_page_concepts';
  info: {
    displayName: 'concepts';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageButton extends Struct.ComponentSchema {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Schema.Attribute.DefaultTo<'Comprar'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.tech-icons': PageTechIcons;
      'page.social-links': PageSocialLinks;
      'page.section-tech': PageSectionTech;
      'page.section-reviews': PageSectionReviews;
      'page.section-modules': PageSectionModules;
      'page.section-faq': PageSectionFaq;
      'page.section-concepts': PageSectionConcepts;
      'page.section-agenda': PageSectionAgenda;
      'page.section-about-us': PageSectionAboutUs;
      'page.section-about-project': PageSectionAboutProject;
      'page.reviews': PageReviews;
      'page.pricing-box': PagePricingBox;
      'page.modules': PageModules;
      'page.itens': PageItens;
      'page.header': PageHeader;
      'page.faqs': PageFaqs;
      'page.content': PageContent;
      'page.concepts': PageConcepts;
      'page.button': PageButton;
    }
  }
}
