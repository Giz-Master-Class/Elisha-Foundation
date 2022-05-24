import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import Coin from '../Images/coin.png'

export const CardHolder2 = () => {
  return (
    <MainCard>
        <CardWrap>
          <LeftCard>
            <Card
               Page='Most Popular events'
               imgUrl={Coin}
               wd='400px'
               ht='545px'
               Paragraph3='Janaury 2022'
               ptn='absolute'
               btm='0'
               lft='0'
               wdt='100%'
               hgt='50%'
               bdg=' rgba(0, 51, 153, 0.4)'
               col='white'
               br=' 0 0 8px 8px'
               Bttn='Donate'
               Head='Donating to Charity'
               Paragraph='We believe everyone should be able to live'
               Paragraph1='with dignity, without dependence. We are a'
               Paragraph2='Non-Governmental Organization,'
               mt='-5px'
               mt2='90px'
               cl='white'
               mg=' 300px 0 0 -375px'
               zi='2'
               cr='white'
               wd4='310px'
               ht4='500px'
              //  wid3='90%'
               fz3='13px'
               ftz='30px'
               mgr='-290px 0 0 0'
               fnz='14px'
               wtth='165px'
               hhht='48px'
               wth='120px'
               hht='40px'
               tgn='center'
               mgl='2px'
               brs='8px'
               mtp='30px'
               pdg='0 40px 0 10px'
               ftz1='28px'
               mlf='10px'
               plf='15px'
               wd5='272px'
               mnl='23px'
               wh='100%'
               mrt='30px'
               mnt='10px'
               mrft='40px'
               mgp='30px'
               mft='100px'
               mft1='1px'
               mt1='40px'
               pml='25px'
               mrl='25px'
               bml='25px'
               pdg1='0 40px 0 5px'
               widr='270px'
               widl='350px'
               bmt='35px'
               fnt='32px'
               mgh='50px'
               fs='25px'
               mnt1='10px'
              //  mft2='1px'
              //  mgt='0 0 0 20px'
            />

              <Card
              //  Page='Most Popular events'
               imgUrl={Coin}
               wd='400px'
               ht='545px'
               Paragraph3='Janaury 2022'
               ptn='absolute'
               btm='0'
               lft='0'
               wdt='100%'
               hgt='50%'
               bdg=' rgba(0, 51, 153, 0.4)'
               col='white'
               br=' 0 0 8px 8px'
               Bttn='Donate'
               Head='Donating to Charity'
               Paragraph='We believe everyone should be able to live'
               Paragraph1='with dignity, without dependence. We are a'
               Paragraph2='Non-Governmental Organization,'
               mt='-5px'
               cl='white'
               mg=' 300px 0 0 -375px'
               zi='2'
               cr='white'
               wd4='310px'
               ht4='500px'
              //  wid3='90%'
               fz3='13px'
               ftz='30px'
               mgr='-290px 0 0 0'
               fnz='14px'
               wtth='165px'
               hhht='48px'
               wth='120px'
               hht='40px'
               tgn='center'
               mgl='2px'
               brs='8px'
               mtp='30px'
              //  pdg='0 40px 0 15px'
               ftz1='28px'
               mlf='10px'
               plf='15px'
               wd5='272px'
               mnl='23px'
               wh='100%'
               mrt='30px'
               mnt='10px'
               mrft='40px'
               mgp='115px'
               mnp='105px'
               mft='100px'
               mft1='1px'
               pml='25px'
               mrl='25px'
               mt1='40px'
               bml='25px'
               pdg1='0 40px 0 5px'
               widr='270px'
               widl='350px'
               bmt='35px'
               fnt='32px'
               mgh='50px'
               mnt1='10px'
               mg1='-25px'
               mg2='-1px'
              //  mft2='3px'
              //  mgt='0 20px 0 0'
            />
          </LeftCard>
          <RightCard>
          <Card
              
               imgUrl={Coin}
               wd='400px'
               ht='545px'
               Paragraph3='Janaury 2022'
               ptn='absolute'
               btm='0'
               lft='0'
               wdt='100%'
               hgt='50%'
               bdg=' rgba(0, 51, 153, 0.4)'
               col='white'
               br=' 0 0 8px 8px'
               Bttn='Donate'
               Head='Donating to Charity'
               Paragraph='We believe everyone should be able to live'
               Paragraph1='with dignity, without dependence. We are a'
               Paragraph2='Non-Governmental Organization,'
               mt='-5px'
               cl='white'
               mg=' 300px 0 0 -375px'
               zi='2'
               cr='white'
               wd4='310px'
               ht4='500px'
               wid3='98%'
               fz3='13px'
               ftz='30px'
               mgr='220px 0 0 -290px'
               fnz='14px'
               wtth='165px'
               hhht='48px'
               wth='120px'
               hht='40px'
               tgn='center'
               mgl='15px'
               brs='8px'
               mtp='30px'
               pdg='0 40px 0 10px'
               ftz1='28px'
               mlf='4px'
               plf='15px'
               wd5='272px'
               mnl='23px'
               wh='100%'
               mrt='30px'
               mnt='10px'
               mrft='40px'
               mgp='115px'
               mnp='105px'
               mrl='-0px'
               pml='1px'
               mnt1='5px'
               widl='350px'
               fnt='32px'
               mgh='50px'
               bmt='35px'
               bml='2px'
               
            />
         

          </RightCard>
        </CardWrap>
    </MainCard>
  )
}

const MainCard = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   /* @media screen and (max-width: 850px){
    flex-wrap: wrap;
    flex-direction: column;
  } */
`

const CardWrap = styled.div`
  width: 95%;
  display: flex;
  margin-left: 40px;
    /* flex-wrap: wrap; */
    
    /* flex-direction: column; */
  
  flex-direction: row;
  @media screen and (max-width: 1350px){
    /* display: flex; */
    flex-wrap: wrap;
    flex-direction: column;
  }
  @media screen and (max-width: 600px){
    /* justify-content: center;  */
    align-items: center;
    width: 100%;
   
  }
  /* @media screen and (max-width: 1350px){
    flex-wrap: wrap;
    flex-direction: column;
  } */

`

const LeftCard = styled.div`
  display: flex;
  justify-content: space-around;
  width: 65%;
  /* align-items: center; */
  margin-left: 1px;
  @media screen and (max-width: 1350px){
    display: flex;
    justify-content: space-between;
     width: 95%;
  }
  @media screen and (max-width: 980px){
    flex-wrap: nowrap;
    /* flex-direction: column; */
  }
  @media screen and (max-width: 850px){
    margin-left: -20px;
  }
  @media screen and (max-width: 768px){
    margin-left: -40px;
  }
  @media screen and (max-width: 706px){
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 90px;
    
  }
  @media screen and (max-width: 600px){
    margin: 0 10px 0 0;
      
    }
  @media screen and (max-width: 525px){
    margin: 0 0 0 -50px;
      
    }
  @media screen and (max-width: 425px){
    margin-left: -25px;
    width: 100%;
  }

  
  @media screen and (max-width: 375px){
    margin-left: -25px;
  }
  @media screen and (max-width: 320px){
     
    margin: 0 10px 0 -45px;
      
     
    }
`


const RightCard = styled.div`
    margin: 0 0 0 -1px;
    @media screen and (max-width: 1350px){
      margin-left: 250px;
  }
  @media screen and (max-width: 850px){
    margin-left: 180px;
  }
  @media screen and (max-width: 768px){
    margin-left: 150px;
  }
  @media screen and (max-width: 706px){
    margin-left: 100px;
  }
  @media screen and (max-width: 600px){
    margin: 0 30px 0 0;
      
    }
  @media screen and (max-width: 525px){
    margin: 0 0 0 -50px;
      
    }
  @media screen and (max-width: 425px){
    margin-left: -60px;
  }
  @media screen and (max-width: 375px){
    margin-left: -60px;
  }
  @media screen and (max-width: 320px){
    margin: 0 10px 0 -45px;
    
  }
  `