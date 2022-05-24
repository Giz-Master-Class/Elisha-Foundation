import React from 'react'
import Donate from '../Images/donate.png'
import Children from '../Images/children.png'
import {Link} from 'react-router-dom'
import  {
   MainContain,
   TopHead,
   Head,
   MainWrap,
   LeftWrap,
   RightWrap,
   Header,
   Para,
   Para2,
   ButtonContain,
   WrapLeft,
   Button,
   linkStyle,
   Button2

} from './Card.Element'


const Card = (props) => {
  return (
    <MainContain>
        <TopHead tgn={props.tgn} mt1={props.mt1} mt2={props.mt2}>
            <Head fs={props.fs}>{props.Page}</Head>
        </TopHead>
        <MainWrap mft2={props.mft2} mft1={props.mft1} mft={props.mft} mgp={props.mgp} mrft={props.mrft} jc={props.jc} fd={props.fd} fxd={props.fxd} wh={props.wh}  mnp={props.mnp}>
            <LeftWrap ht={props.ht} wd={props.wd} imgUrl={props.imgUrl}
                wd1={props.wd1} wd2={props.wd2} wd3={props.wd3} wd4={props.wd4}
                ht1={props.ht1} ht2={props.ht2} ht3={props.ht3} ht4={props.ht4}
                mgl={props.mgl} brs={props.brs} wd5={props.wd5} mnl={props.mnl} mg1={props.mg1} mg2={props.mg2}
                mgt={props.mgt} widl={props.widl} wd6={props.wd6} wd7={props.wd7} wd8={props.wd8}
           >
                <WrapLeft ptn={props.ptn} btm={props.btm} lft={props.lft} wdt={props.wdt} hgt={props.hgt} bdg={props.bdg} col={props.col} br={props.br}>

                </WrapLeft>
            </LeftWrap>
            <RightWrap widr={props.widr} mg={props.mg} zi={props.zi} cr={props.cr} mgr={props.mgr} plf={props.plf}>
                <Header  mgh={props.mgh} fnt={props.fnt} wdt={props.wdt} mt1={props.mt1} mrl={props.mrl} cl={props.cl} ftz={props.ftz} ftz1={props.ftz1} mlf={props.mlf}>{props.Head}</Header>
                  <Para mrft={props.mrft} pml={props.pml} wid={props.wid} hg={props.hg} fz={props.fz} lh={props.lh}
                     wid1={props.wid1}  wid2={props.wid2}  wid3={props.wid3} hg1={props.hg1}
                     hg2={props.hg2} hg3={props.hg3} fz1={props.fz1} fz2={props.fz2} fz3={props.fz3}
                     lh1={props.lh1} lh2={props.lh2} lh3={props.lh3} fnz={props.fnz} wid4={props.wid4} wid6={props.wid6}
                     txt={props.txt} mnt={props.mnt} wdt={props.wdt} hg4={props.hg4} wid5={props.wid5} hg5={props.hg5}
                  >{props.Paragraph}<br/>
                  {props.Paragraph1}<br/> {props.Paragraph2}</Para>  
                  <ButtonContain mtn={props.mtn}  mtn1={props.mtn1} bmt={props.bmt} mnt1={props.mnt1} bml={props.bml} wdt={props.wdt} mt={props.mt} mtp={props.mtp} mrt={props.mrt} mt1={props.mt1}>
                  <Para2 pdg1={props.pdg1} pdg={props.pdg}>{props.Paragraph3}</Para2>
                    <Link to = '/detailedblog' style ={linkStyle}><Button wt={props.wt} he={props.he} >{props.Btn}</Button></Link>
                    <Link to = '/donate' style ={linkStyle}><Button2 wtth={props.wtth} hhht={props.hhht} wth={props.wth} hht={props.hht}>{props.Bttn}</Button2></Link>
                  </ButtonContain>
                
            </RightWrap>
        </MainWrap>
    </MainContain>
  )
}

export default Card