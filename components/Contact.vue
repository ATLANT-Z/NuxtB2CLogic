<template>
  <div>
    <section class="banner contact-ban">
      <div class="banner__img-w">
        <picture>
          <source
              srcset="../assets/img/contactBannerMob.png"
              media="(max-width: 680px)"
          />
          <img class="banner__img" src="../assets/img/contactBanner.png" alt=""/>
        </picture>
      </div>
      <div class="banner__content">
        <div class="banner__content-column">
          <h1 class="banner__title">Контакты</h1>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="contact__w">
        <aside class="contact__nav">
          <div class="contact__nav-line"></div>
          <ul class="contact__nav-list">
            <li class="contact__nav-list-item">
              <div class="contact__nav-list-count">1</div>
              <p class="contact__nav-list-title">Общий номер</p>
            </li>
            <li class="contact__nav-list-item">
              <div class="contact__nav-list-count">2</div>
              <p class="contact__nav-list-title">Отдел продаж</p>
            </li>
            <li class="contact__nav-list-item">
              <div class="contact__nav-list-count">3</div>
              <p class="contact__nav-list-title">Магазины</p>
            </li>
            <li class="contact__nav-list-item">
              <div class="contact__nav-list-count">4</div>
              <p class="contact__nav-list-title">Техподдержка</p>
            </li>
            <li class="contact__nav-list-item">
              <div class="contact__nav-list-count">5</div>
              <p class="contact__nav-list-title">Бухгалтерия</p>
            </li>
          </ul>
        </aside>
        <div class="contact__main">
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">Общий номер</h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-content">
              <h4 class="contact__block-subtitle">
                Многоканальный телефон горячей линии. Обращаться понедельник -
                пятница с 9.00 до 17.30
              </h4>
              <a class="contact__block-tel" href="tel:0800309988">
              <img src="../assets/icons/phoneIcon.svg" alt=""/>
              <span>0800309988</span>
              </a>
              <p class="contact__block-text">
              (звонки с мобильных и стационарных телефонов в пределах Украины
              бесплатные)
              </p>
            </div>
            <div class="contact__block-social">
              <div class="contact__block-subtitle">
                Мы всегда рады ответить на вопросы в социальных сетях!
              </div>
              <div class="contact__block-social-w">
                <a
                    class="contact__block-social-link"
                    href="https://www.instagram.com/logicpower_official/"
                >
                <img src="../assets/icons/instaIcon.svg" alt=""/>
                </a>
                <a
                    class="contact__block-social-link"
                    href="https://www.facebook.com/logicpower.official/"
                >
                <img src="../assets/icons/fbIcon.svg" alt=""/>
                </a>
                <a
                    class="contact__block-social-link"
                    href="https://www.youtube.com/channel/UCy8sx2LSb7clwULG-X-cCyQ"
                >
                <img src="../assets/icons/ytIcon.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">Отдел продаж</h3>
              <div class="contact__block-line"></div>
            </div>
            <p class="contact__block-text">
            Звонки с мобильных и стационарных телефонов в пределах Украины
            бесплатные.
            </p>
            <div class="contact__block-employee-list">
              <div class="contact__block-employee-item">
                <div class="contact__block-employee-info">
                  <div class="contact__block-employee-photo">
                    <img src="../assets/icons/managerPhoto.png" alt=""/>
                  </div>
                  <div class="contact__block-employee-data">
                    <p class="contact__block-employee-name">Анна Георгиева</p>
                    <p class="contact__block-employee-position">
                    Менеджер розничного отдела продаж
                    </p>
                  </div>
                </div>
                <div class="contact__block-employee-contact">
                  <div class="contact__block-employee-comm-w">
                    <a
                        class="contact__block-employee-comm"
                        href="tel:+380674625740"
                    >
                    <img
                        class="contact__block-employee-comm-img"
                        src="../assets/icons/managerPhoneIcon.svg"
                        alt=""
                    />
                    <span>+38 (067) 462-57-40</span>
                    </a>
                    <div class="contact__block-employee-messengers">
                      <a
                          class="contact__block-employee-messenger"
                          href="viber://chat?number=12345678"
                      >
                      <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerViber.svg"
                          alt=""
                      />
                      </a>
                      <a
                          class="contact__block-employee-messenger"
                          href="https://t.me/<USERNAME>"
                      >
                      <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerTelegram.svg"
                          alt=""
                      />
                      </a>
                    </div>
                  </div>
                  <a
                      class="contact__block-employee-comm"
                      href="mailto:a.georgieva@logicfox.pro"
                  >
                  <img
                      class="contact__block-employee-comm-img"
                      src="../assets/icons/managerMailIcon.svg"
                      alt=""
                  />
                  <span>a.georgieva@logicfox.pro</span>
                  </a>
                </div>
              </div>
              <div class="contact__block-employee-item">
                <div class="contact__block-employee-info">
                  <div class="contact__block-employee-photo">
                    <img src="../assets/icons/managerPhoto.png" alt=""/>
                  </div>
                  <div class="contact__block-employee-data">
                    <p class="contact__block-employee-name">Анна Георгиева</p>
                    <p class="contact__block-employee-position">
                    Менеджер розничного отдела продаж
                    </p>
                  </div>
                </div>
                <div class="contact__block-employee-contact">
                  <div class="contact__block-employee-comm-w">
                    <a
                        class="contact__block-employee-comm"
                        href="tel:+380674625740"
                    >
                    <img
                        class="contact__block-employee-comm-img"
                        src="../assets/icons/managerPhoneIcon.svg"
                        alt=""
                    />
                    <span>+38 (067) 462-57-40</span>
                    </a>
                    <div class="contact__block-employee-messengers">
                      <a
                          class="contact__block-employee-messenger"
                          href="viber://chat?number=12345678"
                      >
                      <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerViber.svg"
                          alt=""
                      />
                      </a>
                      <a
                          class="contact__block-employee-messenger"
                          href="https://t.me/<USERNAME>"
                      >
                      <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerTelegram.svg"
                          alt=""
                      />
                      </a>
                    </div>
                  </div>
                  <a
                      class="contact__block-employee-comm"
                      href="mailto:a.georgieva@logicfox.pro"
                  >
                  <img
                      class="contact__block-employee-comm-img"
                      src="../assets/icons/managerMailIcon.svg"
                      alt=""
                  />
                  <span>a.georgieva@logicfox.pro</span>
                  </a>
                </div>
              </div>
              <div class="contact__block-employee-item">
                <div class="contact__block-employee-info">
                  <div class="contact__block-employee-photo">
                    <img src="../assets/icons/managerPhoto.png" alt=""/>
                  </div>
                  <div class="contact__block-employee-data">
                    <p class="contact__block-employee-name">Анна Георгиева</p>
                    <p class="contact__block-employee-position">
                    Менеджер розничного отдела продаж
                    </p>
                  </div>
                </div>
                <div class="contact__block-employee-contact">
                  <div class="contact__block-employee-comm-w">
                    <a
                        class="contact__block-employee-comm"
                        href="tel:+380674625740"
                    >
                    <img
                        class="contact__block-employee-comm-img"
                        src="../assets/icons/managerPhoneIcon.svg"
                        alt=""
                    />
                    <span>+38 (067) 462-57-40</span>
                    </a>
                    <div class="contact__block-employee-messengers">
                      <a
                          class="contact__block-employee-messenger"
                          href="viber://chat?number=12345678"
                      >
                      <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerViber.svg"
                          alt=""
                      />
                      </a>
                      <a
                          class="contact__block-employee-messenger"
                          href="https://t.me/<USERNAME>"
                      >
                      <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerTelegram.svg"
                          alt=""
                      />
                      </a>
                    </div>
                  </div>
                  <a
                      class="contact__block-employee-comm"
                      href="mailto:a.georgieva@logicfox.pro"
                  >
                  <img
                      class="contact__block-employee-comm-img"
                      src="../assets/icons/managerMailIcon.svg"
                      alt=""
                  />
                  <span>a.georgieva@logicfox.pro</span>
                  </a>
                </div>
              </div>
              <div class="contact__block-employee-item">
                <div class="contact__block-employee-info">
                  <div class="contact__block-employee-photo">
                    <img src="../assets/icons/managerPhoto.png" alt=""/>
                  </div>
                  <div class="contact__block-employee-data">
                    <p class="contact__block-employee-name">Анна Георгиева</p>
                    <p class="contact__block-employee-position">
                    Менеджер розничного отдела продаж
                    </p>
                  </div>
                </div>
                <div class="contact__block-employee-contact">
                  <div class="contact__block-employee-comm-w">
                    <a
                        class="contact__block-employee-comm"
                        href="tel:+380674625740"
                    >
                    <img
                        class="contact__block-employee-comm-img"
                        src="../assets/icons/managerPhoneIcon.svg"
                        alt=""
                    />
                    <span>+38 (067) 462-57-40</span>
                    </a>
                    <div class="contact__block-employee-messengers">
                      <a
                          class="contact__block-employee-messenger"
                          href="viber://chat?number=12345678"
                      >
                      <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerViber.svg"
                          alt=""
                      />
                      </a>
                      <a
                          class="contact__block-employee-messenger"
                          href="https://t.me/<USERNAME>"
                      >
                      <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerTelegram.svg"
                          alt=""
                      />
                      </a>
                    </div>
                  </div>
                  <a
                      class="contact__block-employee-comm"
                      href="mailto:a.georgieva@logicfox.pro"
                  >
                  <img
                      class="contact__block-employee-comm-img"
                      src="../assets/icons/managerMailIcon.svg"
                      alt=""
                  />
                  <span>a.georgieva@logicfox.pro</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">Магазины</h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-description">
              <h4 class="contact__block-subtitle">г. Одесса</h4>
              <p class="contact__block-info-text">
              Адрес: Пром.рынок 7 км, 5-я площадка, маг. №630
              </p>
              <p class="contact__block-info-text">
              График работы: Сб-Чт с 7:30 до 14:00; Пт - выходной
              </p>
            </div>
            <div class="contact__block-map-w">
              <iframe
                  class="contact__block-map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10996.652086968357!2d30.6352593!3d46.4454668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65fa4f41baab6944!2sLogicPower!5e0!3m2!1sru!2sua!4v1592986552060!5m2!1sru!2sua"
                  frameborder="0"
                  style="border: 0"
                  aria-hidden="false"
                  tabindex="0"
              ></iframe>
            </div>
            <div class="contact__block-line"></div>
            <div class="contact__block-description">
              <h4 class="contact__block-subtitle">г. Одесса</h4>
              <p class="contact__block-info-text">
              Пром.рынок "Староконный", маг. ЗП-3, ЗП-4 павильон - ул.
              Раскидайловская 31/к
              </p>
              <p class="contact__block-info-text">
              График работы: Пн-Вс с 8:00 до 16:00
              </p>
            </div>
            <div class="contact__block-map-w">
              <iframe
                  class="contact__block-map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2747.4966733400734!2d30.7112497!3d46.4784769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x510ed329a1dace3d!2sLogicPower!5e0!3m2!1sru!2sua!4v1592986700273!5m2!1sru!2sua"
                  frameborder="0"
                  style="border: 0"
                  aria-hidden="false"
                  tabindex="0"
              ></iframe>
            </div>
            <div class="contact__block-line"></div>
            <div class="contact__block-description">
              <h4 class="contact__block-subtitle">г. Одесса</h4>
              <p class="contact__block-info-text">
              Небесної Сотні проспект, 14Б/12 (11)
              </p>
              <p class="contact__block-info-text">
              График работы: Пн-Вс с 8:00 до 16:00
              </p>
            </div>
            <div class="contact__block-map-w">
              <iframe
                  class="contact__block-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.88882708408215!2d30.710111198252406!3d46.40686231749278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633b0678e4b13%3A0x8c6f39b843a3b43a!2sLogicPower!5e0!3m2!1sru!2sua!4v1632305240162!5m2!1sru!2sua"
                  frameborder="0"
                  style="border: 0"
                  aria-hidden="false"
                  tabindex="0"
              ></iframe>
            </div>
          </div>
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">Техподдержка</h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-description">
              <p class="contact__block-info-text">
              На все товары, приобретенные на сайте LogicPower, предоставляется
              гарантия, которая дает право на проведение бесплатного ремонта в
              течение гарантийного периода, при условии соблюдения правил
              эксплуатации.
              </p>
              <p class="contact__block-info-text">
              Срок гарантии Вашего товара указан в гарантийном талоне или иных
              документах, прилагаемых к товару.
              </p>
            </div>
            <a class="contact__block-tel" href="tel:0800309988">
            <img src="../assets/icons/phoneIcon.svg" alt=""/>
            <span>Позвонить</span>
            </a>
            <h4 class="contact__block-subtitle">Сервисные центры:</h4>
            <div class="contact__block-map-w">
              <iframe
                  class="contact__block-map"
                  src="https://www.google.com/maps/d/embed?mid=1tlN4jCbZdkwoAuvsD7P-0hJwBGwZVCp6&hl=ru"
                  frameborder="0"
                  style="border: 0"
                  aria-hidden="false"
                  tabindex="0"
              ></iframe>
            </div>
            <p class="contact__block-info-text">
            Уважаемые партнёры и клиенты компании, убедительная просьба при
            направлении оборудования на гарантийное/постгарантийное
            обслуживание, очень просим Вас прикреплять к отправке заполненный
            сопроводительный лист, это поможет нам быстрее устранить неполадку,
            а так же уменьшить время Вашего ожидания, благодарим Вас за
            сотрудничество!
            </p>
            <a
                class="contact__block-tel"
                href="https://logicpower.ua/flies/blank_servis.xlsx"
            >
            <img src="../assets/icons/dlArrowIcon.svg" alt=""/>
            <span>Скачать файл</span>
            </a>
          </div>
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">Бухгалтерия</h3>
              <div class="contact__block-line"></div>
            </div>
            <p class="contact__block-text">
            По всем вопросам, связанным с оформлением, отправкой или получением
            документации обращайтесь к бухгалтеру предприятия с которым у вас
            заключен договор.
            </p>
            <div class="contact__block-employee-list">
              <div class="contact__block-employee-item">
                <div class="contact__block-employee-info">
                  <div class="contact__block-employee-photo">
                    <img src="../assets/icons/managerPhoto.png" alt=""/>
                  </div>
                  <div class="contact__block-employee-data">
                    <p class="contact__block-employee-name">Анна Георгиева</p>
                    <p class="contact__block-employee-position">
                    Менеджер розничного отдела продаж
                    </p>
                  </div>
                </div>
                <div class="contact__block-employee-contact">
                  <div class="contact__block-employee-comm-w">
                    <a
                        class="contact__block-employee-comm"
                        href="tel:+380674625740"
                    >
                    <img
                        class="contact__block-employee-comm-img"
                        src="../assets/icons/managerPhoneIcon.svg"
                        alt=""
                    />
                    <span>+38 (067) 462-57-40</span>
                    </a>
                    <div class="contact__block-employee-messengers">
                      <a
                          class="contact__block-employee-messenger"
                          href="viber://chat?number=12345678"
                      >
                      <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerViber.svg"
                          alt=""
                      />
                      </a>
                      <a
                          class="contact__block-employee-messenger"
                          href="https://t.me/<USERNAME>"
                      >
                      <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerTelegram.svg"
                          alt=""
                      />
                      </a>
                    </div>
                  </div>
                  <a
                      class="contact__block-employee-comm"
                      href="mailto:a.georgieva@logicfox.pro"
                  >
                  <img
                      class="contact__block-employee-comm-img"
                      src="../assets/icons/managerMailIcon.svg"
                      alt=""
                  />
                  <span>a.georgieva@logicfox.pro</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">юридический адрес и контакты</h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-content">
              <h4 class="contact__block-subtitle">Юридична адреса:</h4>
              <p class="contact__block-info-text">
              Україна, 65007, Одеська обл., місто Одеса, вул Мала Арнаутська,
              будинок 105/1, квартира 11
              </p>
              <a
                  class="contact__block-legal-contacts"
                  href="mailto:info@logicpower.ua"
              >
              <img src="../assets/icons/managerMailIcon.svg" alt=""/>
              <span>E-mail:</span>
              <span>info@logicpower.ua</span>
              </a>
              <a class="contact__block-legal-contacts" href="tel:0674886362">
              <img src="../assets/icons/managerPhoneIcon.svg" alt=""/>
              <span>Телефон:</span>
              <span>067 488 63 62</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class ContactComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.banner.contact-ban {
  margin-bottom: 0;
}

.contact {
  @extend %flex-column;
  justify-content: center;
  align-items: center;

  @extend %padding-wrp;

  &_block-info-text {
    @include fontUnify(18, 24);
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify;
    }
  }

  &__w {
    @extend %width-main;

    @include flex-container;
    gap: 24px;

    padding-bottom: 64px;
  }

  &__nav {
    position: relative;
    margin-right: 201px;
    padding-left: 20px;

    @include bigMobile {
      display: none;
    }
  }

  &__nav-line {
    height: 100%;
    width: 8px;

    background-color: #ffffff;
  }

  &__nav-list {
    position: absolute;
    top: 80px;
    left: 0;
  }

  &__nav-list-item {
    @include flex-container(row, flex-start, center);
    gap: 32px;

    cursor: pointer;
  }

  &__nav-list-count {
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    @include fontUnify(18, 24);
    text-align: center;
    color: $color-main;

    border-radius: 50%;
    background-color: #ffffff;

    &:hover {
      color: $color-main-dark;
    }
  }

  &__nav-list-title {
    @include fontUnify(20, 28);
    letter-spacing: 0.02em;

    color: #8a8a8a;

    &:hover {
      color: $color-main-dark;
    }
  }

  &__main {
    @extend %flex-column;
    gap: 96px;

    padding-top: 80px;

    @include mobile {
      gap: 24px;
      padding-top: 56px;
    }
  }

  &__main-block {
    @extend %flex-column;
    gap: 36px;

    background: #ffffff;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    padding: 32px;

    @include mobile {
      gap: 16px;

      padding: 16px;
    }
  }

  &__block-title-w {
    @extend %flex-column;
    gap: 24px;

    @include mobile {
      gap: 16px;
    }
  }

  &__block-title {
    @include fontUnify(36, 46, 600);
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(20, 30, 600);
    }
  }

  &__block-line {
    width: 100%;
    height: 1px;

    background-color: $color-main;
  }

  &__block-content {
    @extend %flex-column;
    gap: 16px;

    @include mobile {
      align-items: center;
      margin-bottom: 24px;
    }

    & > .contact__block-subtitle {
      margin-bottom: 36px;

      @include mobile {
        margin-bottom: 0;
      }
    }
  }

  &__block-subtitle {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(16, 22);
      letter-spacing: 0.02em;
      text-align: center;
      text-transform: none;
    }
  }

  &__block-tel {
    max-width: 260px;

    @include flex-container(row, space-evenly, center);
    gap: 24px;

    border: 1px solid #8a8a8a;
    border-radius: 8px;

    padding: 8px 12px;

    transition: 0.2s ease;

    &:hover {
      border-color: $color-main-dark;

      & span {
        color: $color-main-dark;
      }
    }

    & span {
      @include fontUnify(24, 34);
      letter-spacing: 0.02em;

      color: $color-main;

      transition: 0.2s ease;

      @include mobile {
        @include fontUnify(18, 22, 500);
      }
    }

    @include mobile {
      max-width: 220px;
    }
  }

  &__block-text {
    @include fontUnify;
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify(12, 16);
      text-align: center;
    }
  }

  &__block-social {
    @include flex-container(column, center, flex-start);
    gap: 32px;

    @include mobile {
      align-items: center;
    }
  }

  &__block-social-w {
    @include flex-container(row, flex-start, center);
    gap: 32px;

    @include mobile {
      justify-content: center;
    }
  }

  &__block-social-link {
    cursor: pointer;
  }

  &__block-employee-list {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 72px;
  }

  &__block-employee-item {
    width: 100%;
    max-width: 336px;

    @extend %flex-column;
    gap: 24px;

    padding: 10px;

    transition: all 0.5s ease;

    @include mobile {
      border-bottom: 1px solid #f3f3f3;
    }

    &:hover {
      box-shadow: 0px 0px 24px rgb(0 0 0 / 30%);
      border-radius: 8px;

      @include mobile {
        box-shadow: none;
        border-radius: 0;
      }
    }
  }

  &__block-employee-info {
    @include flex-container(row, space-between, center);
    gap: 24px;

    @include mobile {
      gap: 16px;
    }
  }

  &__block-employee-photo {
    @include mobile {
      width: 64px;
    }

    & img {
      border-radius: 50%;
    }
  }

  &__block-employee-data {
    @extend %flex-column;
    gap: 2px;

    @include mobile {
      gap: 6px;
    }
  }

  &__block-employee-name {
    @include fontUnify(22, 26, 700);
    text-transform: capitalize;
    color: $color-main;

    @include mobile {
      @include fontUnify;
    }
  }

  &__block-employee-position {
    @include fontUnify(20, 24);
    font-style: italic;

    @include mobile {
      @include fontUnify(12, 16);
      font-style: normal;
    }
  }

  &__block-employee-contact {
    @extend %flex-column;
    gap: 16px;

    & > span {
      @include fontUnify(14, 16);
    }
  }

  &__block-employee-comm-w {
    @include flex-container(row, flex-start, center);
    gap: 16px;
  }

  &__block-employee-comm {
    @include flex-container(row, flex-start, center);
    gap: 32px;

    transition: 0.2s ease;

    &:hover {
      color: $color-main-dark;
    }

    @include mobile {
      gap: 24px;
    }
  }

  &__block-employee-comm-img {
  }

  &__block-employee-messengers {
    @include flex-container(row, flex-start, center);
    gap: 16px;
  }

  &__block-employee-messenger {
    transition: 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__block-description {
    @extend %flex-column;
    gap: 16px;

    & > .contact__block-subtitle {
      text-align: left;
    }
  }

  &__block-map-w {
    @include flex-container(row, center, center);

    width: 100%;
    max-height: 100%;
    overflow: hidden;

    pointer-events: none;
  }

  &__block-map {
    width: 100%;
    height: 523px;
  }

  &__block-info-text {
    @include fontUnify(18, 24, 500);
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify;
    }
  }

  &__block-legal-contacts {
    max-width: 415px;
    width: 100%;

    @include flex-container(row, flex-start, center);
    gap: 16px;

    border: 1px solid #8a8a8a;
    border-radius: 8px;

    padding: 8px 12px;

    transition: 0.2s ease;

    &:hover {
      border-color: $color-main-dark;

      & span {
        color: $color-main-dark;
      }
    }

    & span {
      @include fontUnify(20, 28);
      letter-spacing: 0.02em;

      transition: 0.2s ease;

      @include mobile {
        @include fontUnify;
      }
    }
  }
}
</style>
