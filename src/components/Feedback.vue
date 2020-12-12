<template>
  <div class="feedback">
    <div class="feedback__container">
      <div class="feedback__main-information">
        <div class="feedback__consultant">
          <div class="feedback__consultant-avatar">
            <img
              :src="'/assets/img/consultant.jpg'"
              alt="consultant"
            >
          </div>
          <div class="feedback__consultant-name">
            Вероника Ростова
          </div>
          <div class="feedback__consultant-title">
            Менеджер по продажам
          </div>
          <div class="feedback__consultant-subtitle">
            Подберу для вас самые лучшие предложения.Мои услуги абсолютно бесплатн.
          </div>
        </div>
        <div class="feedback__services">
          <div class="feedback__services-inner">
            <div class="feedback__services-title">
              Услуг
            </div>
            <div class="feedback__services-list">
              <div
                v-for="(service, service_key) in services"
                :key="service_key"
                class="feedback__services-list-item"
              >
                <ProgressBar
                  :current="service.current"
                  :target="service.target"
                  :start-color="service.color"
                  :end-color="service.color"
                  :color-line="'#000000'"
                >
                  <span>{{ service.title }}</span>
                </ProgressBar>
                <div class="feedback__services-list-item-count">
                  {{ service.current }}
                </div>
              </div>
            </div>
            <div class="feedback__services-total-count">
              <p>Всего</p> <span>{{ totalCountOfServices }}</span>
            </div>
          </div>
        </div>
        <div class="feedback__comments">
          <div class="feedback__comments-header">
            <div class="feedback__comments-header-column feedback__comments-header-column--left">
              <div class="feedback__comments-title">
                Последние отзывы
              </div>
              <div class="feedback__comments-all">
                Все отзывы
              </div>
            </div>
            <div class="feedback__comments-header-column feedback__comments-header-column--right">
              <div class="feedback__comments-likes">
                <div class="feedback__comments-likes-icon" />
                131
              </div>
              <div class="feedback__comments-total-count-comments">
                <div class="feedback__comments-total-count-comments-icon" />
                12
              </div>
            </div>
          </div>
          <div class="feedback__comments-content">
            <div
              v-for="(comment, key) in commentsApi"
              :key="key"
              class="feedback__comments-item"
            >
              <div class="feedback__comments-item-header">
                <div class="feedback__comments-item-title">
                  {{ comment.name }}
                </div>
                <div class="feedback__comments-item-date">
                  {{ dateFormat(comment.dateCreate, "D MMM YYYY") }}
                </div>
              </div>
              <div class="feedback__comments-item-content">
                {{ comment.comment }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="feedback__form"
          @keydown.ctrl.enter="addComment()"
        >
          <textarea
            v-model="comments"
            type="text"
            class="feedback__form-input"
          />
          <button
            class="feedback__form-btn"
            @click="addComment()"
          >
            Написать консультанту
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProgressBar from '../baseComponents/progressBar.vue';

export default {
  name: 'News',
  components: {
    ProgressBar,
  },
  data() {
    return {
      services: [
        {
          title: 'Ручное бронирование',
          current: 11,
          target: 11,
          color: '#B1E19B',
        },
        {
          title: 'Пакетные туры',
          current: 3,
          target: 11,
          color: '#ACE2F8',
        },
        {
          title: 'Отели',
          current: 2,
          target: 11,
          color: '#ACE2F8',
        },
      ],
      comments: '',
    };
  },
  computed: {
    ...mapState({
      commentsApi: (state) => state.comments.comments,
    }),
    totalCountOfServices() {
      return this.services.reduce((a, i) => a + i.current, 0);
    },
  },
  methods: {
    async addComment() {
      const {
        comments,
      } = this;
      await this.$store.dispatch('add_comment', {
        dateCreate: new Date(),
        name: 'Liza',
        comment: comments,
      });
      this.comments = '';
    },
    dateFormat(date, format) {
      return this.$moment(date).format(format);
    },
  },
};
</script>

<style scoped lang="scss">
.feedback {
  @include basic-flex(row, center, center);
  height: 100%;
  .feedback__container {
    background-color: #FFFFFF;
    max-width: 720px;
    height: fit-content;
    width: 100%;
    height: fit-content;
    .feedback__main-information {
      padding-top: 14px;
      height: 100%;
      .feedback__consultant {
        position: relative;
        padding: 0 19px 0 17px;
        height: 124px;
        .feedback__consultant-avatar {
          @include position(absolute, 0, null, null, 17px);
          background: #FFFBC8;
          border-radius: 50%;
          height: 124px;
          width: 124px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }
        }
        .feedback__consultant-name {
          @include site-font(default, 16px, 700);
          line-height: 20px;
          color: #333333;
          padding-left: 134px;
          margin-bottom: 2px;
        }
        .feedback__consultant-title {
          @include site-font(default, 12px, 400);
          line-height: 20px;
          color: #808080;
          padding-left: 134px;
          margin-bottom: 5px;
        }
        .feedback__consultant-subtitle {
          @include site-font(default, 14px, 400);
          line-height: 20px;
          color: #333333;
          padding-left: 134px;
          background: #FFFBC8;
          border: 1px solid #DADADA;
          border-radius: 45px 5px 5px 100px;
        }
      }
      .feedback__services {
        @include basic-flex(row, flex-end, center);
        padding-right: 22px;
        @include for-phone-portrait-only {
          padding-right: 19px;
        }
        .feedback__services-inner {
          @include basic-flex(column, flex-start, flex-end);
          .feedback__services-title {
            @include site-font(default, 13px, 400);
            line-height: 15px;
            color: #333333;
            padding-right: 31px;
            margin-bottom: 7px;
          }
          .feedback__services-list {
            border-top: 1px solid #DADADA;
            border-bottom: 1px solid #DADADA;
            padding: 16px 40px 16px 0;
            @include for-phone-portrait-only {
              padding-right: 5px;
            }
            .feedback__services-list-item {
              @include basic-flex(row, space-between, center);
              margin-bottom: 2px;
              &:last-child {
                margin-bottom: 0;
              }
              .progress-bar {
                margin-right: 18px;
                width: 218px;
              }
              .feedback__services-list-item-count {
                @include basic-flex(row, flex-end, center);
                @include site-font(default, 13px, 700);
                line-height: 15px;
                color: #333333;
                width: 41px;
              }
            }
          }
          .feedback__services-total-count {
            @include basic-flex(row, space-between, center);
            @include site-font(default, 16px, 700);
            line-height: 16px;
            color: #333333;
            width: 100%;
          }
        }
      }
      .feedback__comments {
        @include basic-flex(column, flex-start, flex-end);
        padding: 0 19px 22px 19px;
        .feedback__comments-header {
          @include basic-flex(row, space-between, center);
          margin-bottom: 18px;
          width: 100%;
          .feedback__comments-header-column {
            @include basic-flex(row, flex-start, center);
            .feedback__comments-title {
              @include site-font(default, 16px, 700);
              line-height: 16px;
              color: #333333;
              margin-right: 11px;
              @include for-phone-portrait-only {
                font-size: 14px;
              }
            }
            .feedback__comments-all {
              @include site-font(default, 14px, 400);
              line-height: 16px;
              color: #005DA1;
              text-decoration-line: underline;
              cursor: pointer;
            }
            &.feedback__comments-header-column--right {
              @include site-font(default, 12px, 400);
              line-height: 14px;
              color: #333333;
              .feedback__comments-likes {
                @include basic-flex(row, flex-start, center);
                margin-right: 21px;
                .feedback__comments-likes-icon {
                  background-image: url("/assets/cors_svg/like.svg");
                  background-size: cover;
                  background-repeat: no-repeat;
                  height: 12px;
                  width: 12px;
                  margin-right: 6px;
                }
              }
              .feedback__comments-total-count-comments {
                @include basic-flex(row, flex-start, center);
                .feedback__comments-total-count-comments-icon {
                  background-image: url("/assets/cors_svg/comment.svg");
                  background-size: cover;
                  background-repeat: no-repeat;
                  height: 13px;
                  width: 13px;
                  margin-right: 6px;
                }
              }
            }
          }
        }
        .feedback__comments-content {
          @include basic-flex(column, flex-start, flex-end);
          width: 100%;
          .feedback__comments-item {
            width: 100%;
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0px;
            }
            .feedback__comments-item-header {
              @include basic-flex(row, flex-start, center);
              margin-bottom: 6px;
              .feedback__comments-item-title {
                @include site-font(default, 14px, 700);
                line-height: 19px;
                color: #333333;
                margin-right: 10px;
              }
              .feedback__comments-item-date {
                @include site-font(default, 14px, 400);
                line-height: 19px;
                color: #808080;
              }
            }
            .feedback__comments-item-content {
              box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1);
              background-color: #F2FBFF;
              border: 1px solid #C4CBCF;
              padding: 18px 18px 16px 20px;
              position: relative;
              &:after {
                content: '';
                @include position(absolute, -17px, null, null, 23px);
                background-image: url("/assets/cors_svg/comment-angle.svg");
                background-size: cover;
                background-position: right;
                height: 32px;
                width: 28px;
              }
            }
          }
        }
      }
      .feedback__form {
        @include basic-flex(column, center, center);
        padding: 28px 21px 34px 21px;
        background-color: #F2F2F2;
        .feedback__form-input {
          @include site-font(default, 14px, 400);
          font-size: 14px;
          letter-spacing: 1px;
          max-width: 673px;
          width: 100%;
          min-height: 63px;
          max-height: 63px;
          padding: 10px 0 11px 20px;
          background: #FFFFFF;
          border: 1px solid #000000;
          border-radius: 1px;
          margin-bottom: 23px;
        }
        .feedback__form-btn {
          background: #FDD639;
          border-radius: 23px;
          border: none;
          max-width: 281px;
          width: 100%;
          height: 43px;
          cursor: pointer;
          outline: none;
          &:hover,
          &:focus {
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>
