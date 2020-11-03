import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import {
  WeeklyWrapper,
  WeeklyHeader,
  WeeklySubheader,
  WeeklyText,
  HeroImage,
  WeeklySection,
  InfoBox,
  ProtestImage,
  ImageCredit,
  CompactLiveFeed,
} from './WeeklyElements';
import { Button } from '../../components';
import './Weekly.css';

import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import he from 'timeago.js/lib/lang/he';

timeago.register('he', he);

function Weekly() {
  const store = useStore();
  const liveStore = store.liveStore;

  useEffect(() => {
    liveStore.fetchEntries({ offset: 0 });
  }, []);

  return (
    <WeeklyWrapper>
      <HeroImage>
        <HeroImage.TextWrapper>
          <HeroImage.Title>יומן מחאה</HeroImage.Title>
          <HeroImage.Subtitle>29-31.10.20</HeroImage.Subtitle>
        </HeroImage.TextWrapper>
      </HeroImage>
      <WeeklySection
        className="weekly-section"
        id="intro-section"
        imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604253080/weekend_pictures/31-10-2020/first-bg_uozjrt.jpg"
      >
        <InfoBox id="info-box">
          <p style={{ fontWeight: 600 }}> ברוכים הבאים ליומן המחאה העממי של ישראל.</p>
          <p>גלי המחאה שוטפים את ישראל ב-5 החודשים האחרונים, והגיע הזמן לרכז את כל אירועי השבוע במקום אחד.</p>
          <p>כל תחילת שבוע האתר יעודכן בהתרחשויות המחאה בשבוע שחלף. </p>
          <p>
            אנחנו מזמינים אתכם <Link to="">לשלוח אלינו דיווחים ותמונות</Link> במהלך השבוע, וכמובן בערב המחאה בשבת.
          </p>
        </InfoBox>
        <ProtestImage
          id="gesher"
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604256316/weekend_pictures/31-10-2020/gesher01.jpg"
        />
        <ProtestImage
          id="pinkfront"
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604256862/weekend_pictures/31-10-2020/pinkfront.jpg"
        ></ProtestImage>
        <ProtestImage
          imageUrl="https://res.cloudinary.com/onekm/image/upload/e_auto_brightness,h_700/v1604326693/weekend_pictures/31-10-2020/pinkyhope.jpg"
          imgStyle={{ objectPosition: 'top' }}
        >
          <ImageCredit>צילום: אסף דרורי</ImageCredit>
        </ProtestImage>
        <ProtestImage
          id="roey-peleg-arrest"
          imageUrl="https://res.cloudinary.com/onekm/image/upload/c_fill,g_auto,h_700/v1604257020/weekend_pictures/31-10-2020/submaringate-wrong-person-arrested.jpg"
        >
          <ProtestImage.Description>
            <p>
              רועי פלג, ממובילי תנועת חקירה עכשיו, נעצר במהלך צעדת מחאה בכביש 1.{' '}
              <a
                href="https://www.facebook.com/roey.peleg/posts/10224908923856122?__cft__[0]=AZXuTo6QNqEa0PlpxdU_kg2AGJ7JmDkq9hekO7zFCR-bNDCsapt4zQO3bJA1sbCxFr8pu4rh8w9GiSqKhL6dIqAsYumuIWtkQ6rV64HHcMSmgdZ8-Wga0G8ipalzn3pt5os&__tn__=%2CO%2CP-R"
                target="_blank"
                rel="noreferrer"
              >
                לפוסט בפייסבוק
              </a>
            </p>
          </ProtestImage.Description>
        </ProtestImage>
      </WeeklySection>
      <WeeklySection
        className="weekly-section"
        id="rabin-section"
        imageUrl="https://res.cloudinary.com/onekm/image/upload/q_auto:eco/v1604264028/weekend_pictures/31-10-2020/rabin-sqaure_pmcyeu.jpg"
      >
        <div style={{ gridColumn: '1 / 3' }}>
          <WeeklyHeader>זוכרים את הרצח</WeeklyHeader>
          <WeeklySubheader style={{ marginBottom: 10 }}>כיכר רבין, 29/10/20</WeeklySubheader>
          <WeeklyText>ברחבי הארץ צוין יום הזכרון לרצח ראש הממשלה יצחק רבין.</WeeklyText>
          <WeeklyText>
            בימים אלו, כשראש ממשלה מכהן מסית כנגד חלק ניכר מהעם, חשוב לזכור את נקודת הקצה שמדינת ישראל הגיעה אליה לפני 25 שנה
            ולהתנגד בכל הכח להסתה.
          </WeeklyText>
          <p style={{ marginTop: 20, fontSize: 13, color: '#fff8f8db' }}>צילום: רונן טופלברג</p>
        </div>
      </WeeklySection>
      <WeeklySection style={{ background: '#000' }} className="weekly-section" id="rabin-square-picures">
        <ProtestImage
          id="candles"
          imageUrl="https://res.cloudinary.com/onekm/image/upload/q_auto:low/v1604264691/weekend_pictures/31-10-2020/candles_gf8czy.jpg"
        >
          <ImageCredit>צילום: אורן זיו</ImageCredit>
        </ProtestImage>
        <ProtestImage
          id="candles2"
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604264691/weekend_pictures/31-10-2020/candles2_kxjbzp.jpg"
        >
          <ImageCredit>צילום: אורן זיו</ImageCredit>
        </ProtestImage>
        <ProtestImage
          id="clock-square-rabin"
          imageUrl="https://res.cloudinary.com/onekm/image/upload/q_auto:low/v1604266088/weekend_pictures/31-10-2020/clock-square-rabin_u5wwtg.jpg"
        >
          <ProtestImage.Description>
            <p>כיכר השעון, יפו </p>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id="zion-square-rabin"
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604266150/weekend_pictures/31-10-2020/zion_square_egjtwi.jpg"
        >
          <ProtestImage.Description>
            <p>כיכר ציון, ירושלים </p>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id=""
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604364828/weekend_pictures/31-10-2020/rabin-mm_lgwghe.jpg"
        >
          <ProtestImage.Description>
            <p>יד לבנים, הרצליה </p>
          </ProtestImage.Description>
        </ProtestImage>
      </WeeklySection>
      <WeeklySection style={{ background: '#d83039' }} className="weekly-section" id="nationwide-section">
        <div>
          <WeeklyHeader>כל הארץ דגלים</WeeklyHeader>
          <WeeklyText>השבוע ה-19 למחאה הארצית: כ- 185,000 אזרחים ואזרחיות יצאו למחות ביותר מ-1000 נקודות ברחבי הארץ. </WeeklyText>
          <WeeklyText>לחצו על שם ההפגנה לצפייה בתמונות נוספות מהמיקום :) </WeeklyText>
        </div>
        <ProtestImage
          id=""
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604213419/protest_pictures/HCH3gs3PFYzAXTx5ufRc/2020-31-10/-i50z_ySAjaONCUQ_aGYp.jpg"
        >
          <ProtestImage.Description>
            <p>
              <Link to="/protest/HCH3gs3PFYzAXTx5ufRc">ירושלים פינת אחוזה, רעננה</Link>
            </p>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id=""
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604160398/protest_pictures/EW5fekCQwh75gdBqk29w/2020-31-10/rWdaGeQGQsdwhREO9XTid.jpg"
        >
          <ProtestImage.Description>
            <Link to="/protest/EW5fekCQwh75gdBqk29w">כיכר לוחמות השואה, הרצליה</Link>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id=""
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604167916/protest_pictures/4MaSQQmj6jGoFW0cmNkO/2020-31-10/wOXnS3OIXP28pE2Mt5QW5.jpg"
        >
          <ProtestImage.Description>
            <Link to="/protest/4MaSQQmj6jGoFW0cmNkO">אחוזה/בן גוריון, רעננה</Link>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id=""
          style={{ maxHeight: 260 }}
          imgStyle={{ objectPosition: '50%' }}
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604163581/protest_pictures/OASal66GwOGQlFqKvqWA/2020-31-10/EGE0sTjAy5pRWcRTfO_ae.jpg"
        >
          <ProtestImage.Description>
            <Link to="/protest/OASal66GwOGQlFqKvqWA">צומת טופ דן, תל אביב</Link>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id=""
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604166279/protest_pictures/NvsaAM3lMbs6VyvE5Nq3/2020-31-10/LSPWParvBMyE826S9q4KM.jpg"
        >
          <ProtestImage.Description>
            <Link to="/protest/NvsaAM3lMbs6VyvE5Nq3">כיכר השעון, יפו</Link>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id=""
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604220783/protest_pictures/rcru0d98x0zySthMmMUs/2020-31-10/_aisYQZqmUNW194VoMAFp.jpg"
        >
          <ProtestImage.Description>
            <Link to="/protest/rcru0d98x0zySthMmMUs">צומת בית יהושוע</Link>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id=""
          imageUrl="https://res.cloudinary.com/onekm/image/upload/c_scale,q_auto:low,w_1364/v1604299974/weekend_pictures/31-10-2020/ness_ziona_likud.jpg"
        >
          <ProtestImage.Description>
            <p>קניון עופר, נס ציונה. צילום: ראובן להב</p>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id=""
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604300401/weekend_pictures/31-10-2020/bnei_dror_gesher.jpg"
        >
          <ProtestImage.Description>
            <p>צומת בני דרור</p>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id=""
          imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604300790/weekend_pictures/31-10-2020/geshser_kfar_bialik.jpg"
        >
          <ProtestImage.Description>
            <p>גשר כפר ביאליק</p>
          </ProtestImage.Description>
        </ProtestImage>
        <ProtestImage
          id=""
          imageUrl="https://res.cloudinary.com/onekm/image/upload/q_auto:low/v1604300825/weekend_pictures/31-10-2020/zomet_oh.jpg"
        ></ProtestImage>
      </WeeklySection>
      <WeeklySection
        imageUrl="https://res.cloudinary.com/onekm/image/upload/q_auto:low/v1604302235/weekend_pictures/31-10-2020/balfur-bg_mvjzov.jpg"
        id="balfur-section"
      >
        <div id="balfur-section-text">
          <WeeklyHeader>מהנעשה בבלפור</WeeklyHeader>
          <WeeklyText>
            המחאה בירושלים התחילה בעצרת זכרון ליצחק רבין בכיכר ציון. משם צעדו אל כיכר פריז בה הפגינו כ-20 אלף אנשים אל מול מעון
            ראש הממשלה.
          </WeeklyText>
          <WeeklyText>
            לצפייה בכל התמונות מבלפור, הכנסו אל{' '}
            <Link to="/protest/voTcndBEKWlMmvvife42" style={{ fontWeight: 600 }}>
              עמוד ההפגנה
            </Link>
            .
          </WeeklyText>
        </div>
        <div id="balfur-section-content" className="weekly-section">
          <ProtestImage
            className="balfur-section-image"
            imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604302954/weekend_pictures/31-10-2020/balfur_mm.jpg"
          >
            <ImageCredit>צילום: אורן זיו</ImageCredit>
          </ProtestImage>
          <ProtestImage
            className="balfur-section-image"
            imageUrl="https://res.cloudinary.com/onekm/image/upload/q_auto:low/v1604304228/weekend_pictures/31-10-2020/balfur-signn_pu31xw.jpg"
          >
            {' '}
            <ImageCredit>צילום: אורן זיו</ImageCredit>
          </ProtestImage>
          <ProtestImage
            className="balfur-section-image"
            imageUrl="https://res.cloudinary.com/onekm/image/upload/q_auto:low/v1604304193/weekend_pictures/31-10-2020/balfur-acab_x3gvb7.jpg"
          >
            <ImageCredit>צילום: אורן זיו</ImageCredit>
          </ProtestImage>
          <ProtestImage
            className="balfur-section-image"
            imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604177195/protest_pictures/voTcndBEKWlMmvvife42/2020-31-10/hAgyZlFralFZpoHBBWHGR.jpg"
          >
            <ImageCredit>צילום: רוי שתיים</ImageCredit>
          </ProtestImage>
          <ProtestImage
            className="balfur-section-image"
            imageUrl="https://res.cloudinary.com/onekm/image/upload/q_auto:low/v1604304497/protest_pictures/voTcndBEKWlMmvvife42/2020-31-10/J3CmZ9TcEPBIlrqw5V-X4.jpg"
          ></ProtestImage>
        </div>
      </WeeklySection>
      <WeeklySection
        style={{ backgroundPosition: 'center', minHeight: '70vh' }}
        className="weekly-section compact-feed-section"
        imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604331499/weekend_pictures/cover_bg.jpg"
      >
        <div className="compact-feed-section-text">
          <WeeklyHeader>פיד מחאה</WeeklyHeader>
          <p>כל עדכון ותמונה שנשלח מתווסף לצפייה בזמן אמת בפיד המחאה.</p>
        </div>
        <CompactLiveFeed>
          {liveStore.entries.length > 0 &&
            liveStore.entries.map((entry) => (
              <CompactLiveFeed.Card>
                <CompactLiveFeed.Card.Image src={entry.imageUrl} />
                <CompactLiveFeed.Card.Title>
                  <TimeAgo datetime={entry.createdAt} locale="he" />
                  {' ב'}
                  {entry.protestName}
                  {entry.cityName && `, ${entry.cityName}`}{' '}
                </CompactLiveFeed.Card.Title>
                <CompactLiveFeed.Card.Subtitle>
                  {entry.uploaderName?.length > 1 && (
                    <>
                      <Avatar
                        size={21}
                        src={entry.userAvatar || 'https://1km.co.il/anonymousPofile.png'}
                        style={{ marginLeft: 6 }}
                      />
                      {entry.uploaderName}
                    </>
                  )}
                </CompactLiveFeed.Card.Subtitle>
              </CompactLiveFeed.Card>
            ))}
          <div style={{ width: 25 }}></div> {/* Empty div to add space in the end of the feed */}
        </CompactLiveFeed>
        <div style={{ justifySelf: 'center' }}>
          <Button
            style={{ marginBottom: 10, backgroundImage: 'linear-gradient(to right, #76b852 0%, #8DC26F 51%, #76b852 100%)' }}
          >
            הוספת תמונה לפיד
          </Button>
          <Button>לצפייה בפיד המלא</Button>
        </div>
      </WeeklySection>
      <WeeklySection
        imageUrl="https://res.cloudinary.com/onekm/image/upload/v1604160754/protest_pictures/FueqajqQRbwyMMIaF5S3/2020-31-10/89kkGsmuFVVIkZdG5BSyO.jpg"
        className="weekly-section"
        id="seeyou-section"
      >
        <div id="seeyou-section-text" style={{ alignSelf: 'start' }}>
          <WeeklyHeader>נתראה בשבוע הבא!</WeeklyHeader>
          <WeeklyText>
            המחאה בירושלים התחילה בעצרת זכרון ליצחק רבין בכיכר ציון. משם צעדו אל כיכר פריז שם הפגינו כ-20 אלף אנשים אל מול מעון
            ראש הממשלה.
          </WeeklyText>
          <WeeklyText>
            לצפייה בכל התמונות מבלפור, הכנסו אל{' '}
            <Link to="/protest/voTcndBEKWlMmvvife42" style={{ fontWeight: 600 }}>
              עמוד ההפגנה
            </Link>
            .
          </WeeklyText>
        </div>
      </WeeklySection>
      <footer className="weekly-footer">
        <p>
          תודה ל-
          <a href="https://alefalefalef.co.il/" target="_blank" rel="noreferrer">
            <img
              className="alef-logo"
              src="https://res.cloudinary.com/onekm/image/upload/v1604340884/weekend_pictures/alefalefalef.png"
              alt="אלףאלףאלף"
            />
          </a>
          על פונט קרוואן
        </p>
      </footer>
    </WeeklyWrapper>
  );
}

export default observer(Weekly);
