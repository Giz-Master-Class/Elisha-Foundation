import styled from 'styled-components';
import Donate from '../Images/donate.png'


export const MainContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const TopHead = styled.div`
    width: 92%;
    text-align: left;
    margin-left: 40px;
    /* text-align: start; */
   
    /* @media screen and (max-width: 1440px){
    margin-left: 35px;
  } */
    @media screen and (max-width: 1024px){
    margin-left: 15px;
  }
  @media screen and (max-width: 768px){
      
      margin-left: ${({mt1}) =>mt1};
      
     
    }
    @media screen and (max-width: 706px){
    margin-left: 40px;
  }
  @media screen and (max-width: 600px){
    margin-left: ${({mt2}) =>mt2};
      
    }
  @media screen and (max-width: 525px){
    margin-left: 100px;
      
    }
  
    @media screen and (max-width: 425px){
    margin-top: 15px;
    font-size: 30px;
    margin-left: 35px;
  }
  @media screen and (max-width: 375px){
    margin-left: 0px;
    text-align: ${({tgn}) =>tgn};
  }
  
` 

export const Head = styled.h2`
   font-style: medium;
  font-size: 38px;
  color: #505050;
  @media screen and (max-width: 900px){
      font-size: 34px;
  }
  @media screen and (max-width: 425px){
      
      font-size: 30px;
      
    }
    @media screen and (max-width: 375px){
      /* margin-left: 13px; */
    }
   
    @media screen and (max-width: 320px){
      font-size: ${({fs}) =>fs};

     
    }
`

export const MainWrap = styled.div`
   width: 95%;
   display: flex;
   justify-content: ${({jc}) =>jc};
   margin-top: ${({mgp}) =>mgp};
   margin-bottom: 10px;
   flex-direction: ${({fd}) =>fd};
   margin-left: ${({mrft}) =>mrft};
   @media screen and (max-width: 900px){
      margin-top: ${({mnp}) =>mnp};
  }

   @media screen and (max-width: 850px){
      width: 95%;
      flex-wrap: wrap;
      
    }
    @media screen and (max-width: 600px){
      margin-left: ${({mft}) =>mft};
    }
    @media screen and (max-width: 425px){
      flex-direction: ${({fxd}) =>fxd};
      align-items: center;
      margin-top: 5px;
      margin-left: ${({mft1}) =>mft1};
      
    }
    @media screen and (max-width: 320px){
       width: ${({wh}) =>wh};
      margin-left: ${({mft2}) =>mft2};
       
    }
    
  
`

export const LeftWrap = styled.div`
  width: ${({wd}) =>wd};
  height: ${({ht}) =>ht};
  background-image: url(${(props) =>props.imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  margin: ${({mgt}) =>mgt};
  @media screen and (max-width: 1200px){
      width: ${({wd1}) =>wd1};
      height: ${({ht1}) =>ht1};
    }
    @media screen and (max-width: 1024px){
      width: ${({wd6}) =>wd6};
      
    }
    @media screen and (max-width: 900px){
      width: ${({widl}) =>widl};
      border-radius: ${({brs}) =>brs};
      
  }
    @media screen and (max-width: 850px){
      margin-bottom: 15px;
      width: ${({wd2}) =>wd2};
      height: ${({ht2}) =>ht2};
    }
    @media screen and (max-width: 768px){
      margin-left: ${({mg1}) =>mg1};
      
    }
    @media screen and (max-width: 706px){
      margin-left: ${({mg2}) =>mg2};
      width: ${({wd7}) =>wd7};
      
    }
    
    @media screen and (max-width: 525px){
      width: ${({wd8}) =>wd8};
      
    }
    @media screen and (max-width: 425px){
      width: ${({wd3}) =>wd3};
      height: ${({ht3}) =>ht3};
    }
    @media screen and (max-width: 375px){
      width: ${({wd4}) =>wd4};
      height: ${({ht4}) =>ht4};
      margin-left: ${({mgl}) =>mgl};
      border-radius: ${({brs}) =>brs};
    }
    @media screen and (max-width: 320px){
       margin-left: ${({mnl}) =>mnl};
       width: ${({wd5}) =>wd5};
       
       /* height: 450px; */
       
    }
  
`

export const RightWrap = styled.div`
   /* margin-bottom: 20px; */
   /* display: flex;
   flex-direction: column;
   text-align: start; */
   margin: ${({mg}) =>mg};
   z-index: ${({zi}) =>zi};
   color: ${({cr}) =>cr};
   @media screen and (max-width: 375px){
      margin: ${({mgr}) =>mgr};
      width: ${({widr}) =>widr};
     
      
    }
    @media screen and (max-width: 320px){
       /* margin-left: 1px; */
       padding-left: ${({plf}) =>plf};
    }
`

export const Header = styled.h2`
   color: ${({cl}) =>cl};
  font-size: 38px;
  line-height: 45px;
  margin-top: -10px;
  font-weight: 500;
  /* background: pink; */
  @media screen and (max-width: 900px){
    font-size: ${({fnt}) =>fnt};
    margin-left: ${({mgh}) =>mgh};
  }
  @media screen and (max-width: 768px){
      
      margin-left: ${({mt1}) =>mt1};
      
     
    }
  @media screen and (max-width: 375px){
      font-size: ${({ftz}) =>ftz};
      margin-left: ${({mrl}) =>mrl};
      width: ${({wdt}) =>wdt};
     
    }
  @media screen and (max-width: 320px){
      font-size: ${({ftz1}) =>ftz1};
     margin-left: ${({mlf}) =>mlf};
     
    }

`

export const Para = styled.p`
  width: ${({wid}) => wid};
  height: ${({hg}) => hg};
  font-size: ${({fz}) =>fz};
  line-height: ${({lh}) =>lh};
  margin-top: -10px;
  /* background: orange; */
  @media screen and (max-width: 1024px){
      width: ${({wid1}) =>wid1};
      height: ${({hg1}) =>hg1};
      font-size: ${({fz1}) =>fz1};
      line-height: ${({lh1}) =>lh1};
      
    }
    @media screen and (max-width: 900px){
      margin-left: ${({mrft}) =>mrft};
      
      height: ${({hg4}) =>hg4};
  }
    @media screen and (max-width: 850px){
      width: ${({wid2}) =>wid2};
      height: ${({hg2}) =>hg2};
      font-size: ${({fz2}) =>fz2};
      line-height: ${({lh2}) =>lh2};
      
    }
    @media screen and (max-width: 706px){
      
      width: ${({wid6}) =>wid6};
      height: ${({hg5}) =>hg5};
      
    }
    @media screen and (max-width: 525px){
      width: ${({wid4}) =>wid4};
      
    }
    @media screen and (max-width: 425px){
      width: ${({wid5}) =>wid5};
      height: ${({hg2}) =>hg2};
    }
    @media screen and (max-width: 375px){
      font-size: ${({fnz}) =>fnz};
       margin-left: ${({pml}) =>pml};
       width: ${({wdt}) =>wdt};
       width: ${({wid2}) =>wid2};
       
    
    }
    @media screen and (max-width: 320px){
      width: ${({wid3}) =>wid3};
      height: ${({hg3}) =>hg3};
      text-align: ${({txt}) =>txt};
      font-size: ${({fz3}) =>fz3};
      margin-left: ${({mnt}) =>mnt};
    
      
    }
`

export const ButtonContain = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-top: ${({mt}) =>mt};
   
   @media screen and (max-width: 1024px){
      margin-top: ${({mtn}) =>mtn};
  }
   @media screen and (max-width: 900px){
      margin-left: ${({bmt}) =>bmt};
      margin-top: ${({mtn1}) =>mtn1};
  }
  @media screen and (max-width: 768px){
     
      margin-left: ${({mt1}) =>mt1};
      /* margin-top: ${({mtn1}) =>mtn1}; */
     
    }
   @media screen and (max-width: 375px){
      margin-top: ${({mtp}) =>mtp};
      margin-left: ${({bml}) =>bml};
      width: ${({wdt}) =>wdt};
    }
    @media screen and (max-width: 320px){
      
      margin-left: ${({mnt1}) =>mnt1};
    }

`
export const Para2 = styled.p`
   font-size: 16px;
   padding: 0 70px 0 0;
   @media screen and (max-width: 375px){
      padding: ${({pdg1}) =>pdg1};
    }
   @media screen and (max-width: 320px){
      
      padding: ${({pdg}) =>pdg}; 
    }
`

export const Button = styled.div`
  width: ${({wt}) =>wt};
  height: ${({he}) =>he};
  background: #3AB54A;
  color: #ffffff;
  text-align: center;
  padding: 15px 0 0 0;
  /* gap: 10px; */
  border-radius: 8px;
  

  
`
export const Button2 = styled.div`
  width:${({wtth}) =>wtth};
  height:  ${({hhht}) =>hhht};
  background: #3AB54A;
  color: #ffffff;
  text-align: center;
  padding: 15px 0 0 0;
  /* gap: 10px; */
  border-radius: 8px;
  
  @media screen and (max-width: 375px){
      width: ${({wth}) =>wth};
      height:  ${({hht}) =>hht};

    }
  
`


export const WrapLeft = styled.div`
  position: ${({ptn}) =>ptn};
  bottom: ${({btm}) =>btm};
  left: ${({lft}) =>lft};
  width:${({wdt}) =>wdt};
  height: ${({hgt}) =>hgt};
  background: ${({bdg}) =>bdg};
  color: ${({col}) =>col};
  border-radius: ${({br}) =>br};
`

export const linkStyle = {
  textDecoration :"none",
  
  
}
