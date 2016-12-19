import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Component from '../common/ShallowCompareComponent';
import './content.scss';

import Form from '../common/Form/Form';

const form = {
  groups: [
    {
      title: 'Основные',
      name: 'main',
      elements: [
        {
          title: 'Автор',
          name: 'author_id',
          type: 'select',
          options: [
            { value: '1', title: 'Петя' },
            { value: '2', title: 'Боря Красивый' },
            { value: '3', title: 'Ксюша' },
            { value: '4', title: 'inkognito 33' },
          ],
        },
        {
          title: 'Название',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Дата написания',
          name: 'created_at',
          type: 'datetime',
        },
        {
          title: 'Дата публикации',
          name: 'published_at',
          type: 'datetime',
        },
        {
          title: 'Статус',
          name: 'status_id',
          type: 'select',
          options: [
            { value: '1', title: 'черновик' },
            { value: '2', title: 'на модерации' },
            { value: '3', title: 'опубликована' },
            { value: '4', title: 'скрыта' },
            { value: '5', title: 'отклонена' },
            { value: '6', title: 'удалена' },
          ],
        },
        {
          title: 'Сезон',
          name: 'season',
          type: 'multi-select',
          options: [
            { value: '1', title: 'весна' },
            { value: '2', title: 'лето' },
            { value: '3', title: 'осень' },
            { value: '4', title: 'зима' },
          ],
        },
        {
          title: 'Текст статьи',
          name: 'description',
          type: 'text',
        },
        {
          title: 'Публиковать на главной?',
          name: 'is_home',
          type: 'boolean',
        },
      ],
    },
    {
      title: 'SEO',
      name: 'seo',
      elements: [
        {
          title: 'Тэги',
          name: 'tags',
          type: 'multi-select-with-adding',
          options: [
            { value: '1', title: 'декор' },
            { value: '2', title: 'сад' },
            { value: '3', title: 'огород' },
            { value: '4', title: 'ремонт' },
          ],
        },
        {
          title: 'Ключевые слова',
          name: 'seo_keywords',
          type: 'multi-select-with-adding',
          options: [
            { value: '1', title: 'лопата' },
            { value: '2', title: 'сад' },
            { value: '3', title: 'огород' },
            { value: '4', title: 'OBI' },
            { value: '5', title: 'Новый год' },
          ],
        },
        {
          title: 'Описание',
          name: 'seo_description',
          type: 'string',
        },
      ],
    },
    {
      title: 'Изображения',
      name: 'images',
      elements: [
        {
          title: 'Превью для списков',
          name: 'preview',
          type: 'image',
        },
        {
          title: 'Основное',
          name: 'preview',
          type: 'image',
        },
      ],
    },
    {
      title: 'Социальное',
      name: 'social',
      elements: [
        {
          title: 'Рейтинг',
          name: 'rating',
          type: 'number',
          info: '339',
        },
        {
          title: 'Лайки',
          name: 'likes',
          type: 'number',
          value: '1003',
          isDisabled: true,
        },
        {
          title: 'Комментарии',
          name: 'comments',
          type: 'comments',
        },
      ],
    },
    {
      title: 'Сопутствующие материалы',
      name: 'materials',
      elements: [
        {
          title: 'Товары',
          name: 'products',
          type: 'multi-select-with-adding',
          options: [
            { value: '1', title: 'лопата' },
            { value: '2', title: 'молоток' },
          ],
        },
        {
          title: 'Похожие статьи',
          name: 'articles',
          type: 'multi-select-with-adding',
        },
      ],
    },
  ],
};

class Content extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className="content">
        <ul>{list.map((item, i) => (<li key={i}>{item.title}</li>))}</ul>
        <Form {...form} />
      </div>
    );
  }
}

Content.propTypes = {
//  dispatch: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

export default connect(store => ({
//  dispatch: store.dispatch,
  list: store.api.get('list'),
}))(Content);
