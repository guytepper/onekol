import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProtest, updateProtest } from '../api';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { ProtestForm } from '../components';
import { Switch, Route } from 'react-router-dom';
import SocialButton, { Button } from '../components/Button/SocialButton';

const mobile = `@media (max-width: 500px)`;

function useFetchProtest() {
  const [protest, setProtest] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function _fetchProtest(id) {
      const result = await fetchProtest(id);
      if (result) {
        setProtest(result);
      } else {
        // TODO: handle 404
      }
    }

    _fetchProtest(id);
  }, [id]);

  return protest;
}

function ProtestPageContent({ protest }) {
  console.log(protest);
  const history = useHistory();

  const { coordinates, whatsAppLink, telegramLink, displayName, streetAddress, notes } = protest;

  return (
    <ProtestPageContainer>
      <MapWrapper center={{ lat: coordinates.latitude, lng: coordinates.longitude }} zoom={14}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{ lat: coordinates.latitude, lng: coordinates.longitude }}></Marker>
      </MapWrapper>

      <ProtestContainer>
        <Info>
          <ProfilePic src="/protest-profile-pic.png" alt="Protester with flag getting sprayed" />
          <Details>
            <Left>
              <Title>{displayName}</Title>
              <Location>
                <FlagIcon src="/icons/blue-flag.svg" alt="flag icon" />
                {streetAddress}
              </Location>
              <Notes>{notes}</Notes>
            </Left>
            <EditButton onClick={() => history.push('edit')}>עריכה</EditButton>
          </Details>
        </Info>

        <DatesAndSocial>
          {/* Dates */}
          <SectionContainer>
            <SectionTitle>
              <img src="/icons/clock.svg" alt="clock icon" />
              מועדי הפגנה קרובים
            </SectionTitle>

            <Dates>
              <Date>
                <BoldDateText>9.10.2020</BoldDateText>
                <DateText>יום שישי, בשעה</DateText>
                <BoldDateText>18:30</BoldDateText>
              </Date>
            </Dates>
          </SectionContainer>

          {/* Social */}
          <SocialContainer>
            <SectionTitle>
              <img src="/icons/social.svg" alt="share icon" />
              מידע ועדכונים:
            </SectionTitle>

            <SocialButtons>
              {whatsAppLink && (
                <SocialButton type="whatsapp" link={whatsAppLink}>
                  הצטרפות לקבוצת הוואצאפ
                </SocialButton>
              )}

              {telegramLink && (
                <SocialButton type="telegram" link={telegramLink}>
                  הצטרפות לקבוצה בטלגרם
                </SocialButton>
              )}

              <SocialButton type="facebook" link="www.twitter.com">
                הצטרפות לקבוצה בפייסבוק
              </SocialButton>

              <SocialButton type="twitter" link="www.twitter.com">
                עקוב בטוויטר
              </SocialButton>
            </SocialButtons>
          </SocialContainer>
        </DatesAndSocial>
      </ProtestContainer>
    </ProtestPageContainer>
  );
}

export default function ProtestPage() {
  const protest = useFetchProtest();
  // const { onFileUpload } = useFileUpload(false);

  if (!protest) {
    // TODO: loading state
    return <div>Loading...</div>;
  }

  const { coordinates, id } = protest;

  return (
    <Switch>
      <Route path="/protest/:id/edit">
        <EditViewContainer>
          <ProtestForm
            initialCoords={coordinates}
            submitCallback={(params) => updateProtest(id, params)}
            defaultValues={protest}
          />
        </EditViewContainer>
      </Route>
      <Route>
        <ProtestPageContent protest={protest} />
      </Route>
    </Switch>
  );
}

//----------------- Styles -------------------------//

const EditViewContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  padding: 24px 0;
  margin: 0 auto;
`;

const ProtestPageContainer = styled.div`
  color: #000000;
  padding-bottom: 150px;

  h1,
  h1 {
    margin: 0;
  }
`;

const ProtestContainer = styled.div`
  max-width: 920px;
  margin: 0 auto;
  z-index: 1;
`;

const Info = styled.div`
  position: relative;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 10px -1px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin-top: -30px;
  z-index: 10000;
`;

const ProfilePic = styled.img`
  width: 163px;
  object-fit: cover;
`;

const Left = styled.div``;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  color: #000000;
  margin-bottom: 8px;
`;

const Location = styled.h2`
  font-size: 24px;
  line-height: 28px;
  font-weight: normal;
  display: flex;
  align-items: center;

  img {
    margin-left: 11px;
  }
`;

const Notes = styled.div`
  margin-top: 27px;
  font-size: 16px;
  line-height: 19px;
`;

const FlagIcon = styled.img``;

const MapWrapper = styled(Map)`
  width: 100%;
  height: 256px;
`;

const EditButton = styled.button`
  height: 32px;
  color: #1251f3;
  border: 1px solid #1251f3;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 18.96px;
  padding-top: 6px;
  padding-bottom: 7px;
  padding-left: 24px;
  padding-right: 24px;
  background: white;
`;

const SectionContainer = styled.div`
  padding: 40px 40px 34px 40px;
  box-shadow: 0px 4px 10px -1px rgba(0, 0, 0, 0.15);
  background-color: white;
`;

const SectionTitle = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #1251f3;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  img {
    height: 15px;
    width: 15px;
    margin-left: 9px;
  }
`;

const Details = styled.div`
  padding: 40px 40px 34px 40px;
  display: flex;
  justify-content: space-between;
  flex: 1;

  ${mobile} {
    flex-direction: column;

    ${EditButton} {
      margin-top: 24px;
    }
  }
`;

const DatesAndSocial = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  ${mobile} {
    flex-direction: column;
  }
`;

const Dates = styled.ul`
  max-width: 420px;
  width: 420px;
  padding: 0;
  margin: 0;

  ${mobile} {
    width: 100%;
  }
`;

const Date = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;

  ${mobile} {
    flex-direction: column;
  }
`;

const DateText = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
`;

const BoldDateText = styled(DateText)`
  font-weight: 700;
`;

const SocialButtons = styled.div`
  width: 284px;

  ${mobile} {
    width: 100%;
  }

  ${Button} {
    margin-bottom: 16px;
  }
`;

const SocialContainer = styled(SectionContainer)`
  ${mobile} {
    margin-top: 20px;
  }
`;
