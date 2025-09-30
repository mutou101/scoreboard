import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import Taro from '@tarojs/taro';
import './index.scss';

export default function Index () {
  
  const { router = {} } = Taro.getCurrentInstance();
  console.log('', router);
  useLoad(() => {
    console.log('Page loaded.');
  })

  const handeClickUser = () => {
    Taro.navigateTo({
      url: '/pages/base/user/index'
    });
  }

  return (
    <View className="index-view">
      <View className='at-article__h3 title' onClick={handeClickUser}>常德市第四人民医院用户服务协议</View>
      <View className='at-article__content'>
        <View className='at-article__section'>
          <View className='at-article__p'>
            常德市第四人民医院智慧医疗平台是由常德市第人民医院提供医疗专家团队，依托互联网和微信/支付宝/小荷/抖音/头条以及广州海鹚网络科技有限公司建设与运营的智慧医疗平台(以下统称“本平台”)"用户“是指使用本平台服务的使用人，在本协议更多地称为“您"。
          </View>
          <View className='at-article__p'>
            本平台将在您的就医过程中为您提供全方位的服务:当您去需要去线下就医时，为您提供在线预约挂号、门诊缴费、报告查看、住院日清单查看、住院押金补缴等功能，如果您是慢性病、常见病、多发病等复诊患者，需要进行复诊或者咨询，本平台将运用“联网+医疗“技术竭诚为您提供医疗诊断、治疗和咨询帮助，并对处方的合理用药进行审核。具体内容如下：
          </View>
          <View className='at-article__h3'>一、条款确认</View>
          <View className='at-article__p'>
            1.1 您使用本平台服务前应仔细阅读并透彻理解常德市第四人民医院智慧医疗用户协议及该协议项下所包含的其他附属协议、附加条款(以下简称“本协议”)，在确认充分理解并同意后方可使用本平台服务。
          </View>
          <View className='at-article__p'>
            1.2 如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本平台。
          </View>
          <View className='at-article__p'>
            1.3 您在进行登录授权过程中，当您点击“立即登录”按钮即视为您已仔细阅读本协议，同意接受本协议项下所有条款，包括接受本平台对协议随时所做的任何修改，并愿意受其约束。这之后方能按系统提示完成登录操作，享受挂号服务、报告查询等医疗健康服务。
          </View>
          <View className='at-article__p'>
            1.4 任何使用本平台的某项功能，或以其他间接方式使用的行为，包括登录、查看、发布信息等行为，均视为同意并接受本协议所有条款约定，并承担相应法律责任。
          </View>
          <View className='at-article__p'>
            1.5 本平台可根据情况制订、修改本协议及条款并在本平台张贴，无须另行通知用户，变更协议和条款自动产生法律效应。您可随时登陆查阅最新协议，您有义务不时关注并阅读最新版的协议及平台公告。如您不同意更新后的协议，可以且应立即停止接受本平台依据本协议提供的服务;如您继续使用本平台提供的服务，即视为同意更新后的协议。当您与本平台发生争议时，应以最新的服务协议为准。
          </View>
          <View className='at-article__h3'>二、账号管理</View>
          <View className='at-article__p'>
            2.1 用户添加就诊人资料时，需提供真实、及时、完整和合法有效的资料，如果资料发生变动，您应及时联系平台进行审核及更改。若提供的资料信息并非真实、完整、及时、有效，本平台有权停止、冻结用户账号并要求用户承担因此造成的损失及法律后果。
          </View>
          <View className='at-article__p'>
            2.2 用户需妥善保管自身就诊卡、账号等个人资不得以任何方式将就诊卡、账号等个人资料转料，让、告知或借给他人。如因上述或其他缘故导致就诊卡、账号等个人资料遗失、被盗或用户信息泄露等情况致使自身相关权益受到损害的，皆由用户独自承担一切后果。
          </View>
          <View className='at-article__p'>
            2.3 您一旦登录成功，成为本平台的合法用户，您都要对任何以您账号进行的所有活动和事件负全责且您有权随时根据指示修改您的绑定状态。如您发现就诊卡、账号等个人资料被非法使用或其他异常状况，请立即通知本平台客服人员，客服人员验证用户有效身份后可暂停该就诊卡、账号等的登录和使用，待相关部门查实审核后，如无异常状况即可恢复使用。
          </View>
          <View className='at-article__h3'>三、服务内容</View>
          <View className='at-article__p'>
            3.1 智慧医疗产品是一款为您在就医过程中提供全方位的服务产品:  
          </View>
          <View className='at-article__p'>
            (1)线下就医时，本平台为用户打通了门诊和住院全流程，为用户提供在线预约挂号、门诊缴费、报告查看、住院日清单查看、住院押金补缴等功能。
          </View>
          <View className='at-article__p'>
            (2)线上诊疗时，本平台为用户提供在线复诊和健康咨询等服务，并且运用“互联网+医疗“技术竭诚为用户提供医疗诊断、治疗和咨询帮助，并对处方的合理用药进行审核。
          </View>
          <View className='at-article__p'>
            3.2 本平台是以(包括但不限于)微信/支付宝/小荷/抖音/头条、PC端为依托搭建的智慧医疗服务平台，为您线上线下的就医提供全方位的服务，当用户要去线下就医时，用户可以在本平台上在线挂号、缴费、查报告、查清单等，省去线下排队的麻烦，同时用户也可以在本平台和医务人员进行交流，实现线上咨询、问诊、在线开处方、档案管理、慢性病管理等功能。
          </View>
          <View className='at-article__p'>
            3.3 用户在线上绑卡的过程中需提供真实、完整详细的信息。线下就医以此为基准，如您使用虚假身份信息或者冒用他人信息，医院有权拒绝为您提供就医服务，由此造成的不良后果，一切由您本人负责。
          </View>
          <View className='at-article__p'>
            3.4 线上剩余号源的数量有一定的延时，因此会出现部分号源您可以查看到，但是进行挂号支付的时候号源已经被其他人挂走，由此给您带来的不便，敬请谅解。
          </View>
          <View className='at-article__p'>
            3.5 检查检验的报告数据，住院日清单的数据，请您以线下为准，本平台为您提供的数据仅供参考，不得作为就医凭证或者其他凭证。
          </View>
          <View className='at-article__p'>
            3.6 根据相关法律法规规定，用户应理解线上的就诊互联网诊疗不涉及面诊、触诊、初诊，医生仅根据患者提供的信息和初诊数据提供复诊服务。线上问诊仅服务鋌糲ú玗喚岶唝徊分慢性病、常见病、多发病等复诊患者，不接受初诊惠者或未明确诊断、疑难病、罕见病等疾病患者，或者远程医疗不能解决的复杂问题，此类情况建议您去线下门诊接受进一步诊治。
          </View>
          <View className='at-article__p'>
            3.7 用户在线上问诊及健康咨询过程中需提供真完整、详细的信息。医务人员以此信息为判定基实、础，并尽可能利用所掌握的医学知识及临床经验给予相关的临床诊断及咨询建议。请您真实回答医生提出的问题，切勿故意隐瞒或虚报，由此造成的不良后果，一切由您本人负责。
          </View>
          <View className='at-article__p'>
            3.8 如您有药物过敏史，需提前填写清楚，并告知医生，同时用药过程中如有不适反应要及时告知医生、线下就诊。任何药物都有毒副作用，无论通过口服、注射、外用等任何给药途径，对人体都有毒害作用，正常合理用药也可以引起不良反应，包括但不限于:头晕、头痛、发热、口干、哮喘、乏力嗜睡、排尿困难、皮疹、胃肠反应、消化道出血穿孔、血细胞减少錆耋劂却、Ồ霏垭♪鼎庞父歩血功能障碍出血、再生障碍性贫血、过敏性肺実蝰繞沢羿猥縐奕、蠆侈軹閨氚偹蝾拡困发性感染、肝肾功损害、神经损害、心率失常、心衰、过敏性休克等甚至危及生命，具体参见药品使用说明书。关于药物的功能及使用，若不清楚需提前告知医生。
          </View>
          <View className='at-article__p'>
            3.9 怀孕及哺乳期妇女、14岁及以下儿童、65岁以上老年患者需在专科指导下用药。服用药物过程中如出现不适，请及时到当地医院就诊。
          </View>
          <View className='at-article__p'>
            3.10 用户在使用过程中的言行需遵守国家法律、法规等，不违背社会公共利益或公共道德，不损害他人的合法权益，不违反本协议所列条款议。对以下几类问题医务人员有权不予回复:
          </View>
          <View className='at-article__p'>
            (1)非医疗健康类问题，如动物疾病问题、社会意识形态问题等;
          </View>
          <View className='at-article__p'>
            (2)医疗司法举证或询证问题;
          </View>
          <View className='at-article__p'>
            (3)胎儿性别鉴定问题;
          </View>
          <View className='at-article__p'>
            (4)未按提问要求进行提问，如提问时未指定医生，却要求具体医生回复;
          </View>
          <View className='at-article__p'>
            (5)有危害他人或自己可能的问题;
          </View>
          <View className='at-article__p'>
            (6)追问医生个人信息的问题;
          </View>
          <View className='at-article__p'>
            (7)故意挑逗、侮辱医生的提问;
          </View>
          <View className='at-article__p'>
            (8)其他违反法律法规或社会公共利益、公共道德或违反平台协议的问题。
          </View>
          <View className='at-article__h3'>四、使用权责</View>
          <View className='at-article__p'>
            4.1 用户如提供虚假信息或实施其他违反本协议的行为，本平台有权立即终止对用户提供全部或部分服务。
          </View>
          <View className='at-article__p'>
            4.2 用户需承担包括但不限于如下违反相关法律法规或违反平台规则情形造成的全部责任: 
          </View>
          <View className='at-article__p'>
            (1)提供信息不完整、不真实、不准确，对医生诊断产生误导影响;
          </View>
          <View className='at-article__p'>
            (2)未按要求披露过敏史等;
          </View>
          <View className='at-article__p'>
            (3)惠者及近亲属不配合或干扰医疗机构进行符合诊疗规范的诊疗。
          </View>
          <View className='at-article__p'>
            4.3 用户需保障和维护平台的利益，用户如在使用过程中实施不正当行为而给平台、平台医生或其他第三方造成任何损失，本平台有权终止服务，由此造成的法律和经济后果由用户承担，不正当行为包含但不限于以下方面:
          </View>
          <View className='at-article__p'>
            (1)用户发布有医托、强烈广告性质内容的行为;
          </View>
          <View className='at-article__p'>
            (2)用户从中国境内向境外传输技术性资料时有违背中国有关法律法规行为;
          </View>
          <View className='at-article__p'>
            (3)用户使用本平台提供的服务从事洗钱、窃取商业秘密等非法行为;
          </View>
          <View className='at-article__p'>
            (4)用户以包括但不限于盗用他人账号、恶意编造或虚构信息、恶意投诉、未经允许进入他人电脑或手机系统或本平台系统等方式干扰本平台服务;
          </View>
          <View className='at-article__p'>
            (5)用户有传输非法、骚扰性、影射或中伤他人、辱骂性、恐吓性、伤害性、庸俗、带有煽动性、可能引起公众恐慌、浮秽的、散播谣言等信息资料的行为;
          </View>
          <View className='at-article__p'>
            (6)用户有传输教唆他人构成犯罪行为、危害社会治安、侵害自己或他人人身安全的资料，或传输助长国内不利条件和涉及损害国家安全和社会公共利益的资料，或传输不符合当地法规、国家法律和国际法律的资料的行为;
          </View>
          <View className='at-article__p'>
            (7)用户有发布涉及政治、性别、种族歧视或攻击他人的文字、图片或语言等信息;
          </View>
          <View className='at-article__p'>
            (8)用户有其他发布违法信息、严重违背社会公德、违背本协议或补充协议、违反法律禁止性规定的行为。
          </View>
          <View className='at-article__h3'>五、知识产权</View>
          <View className='at-article__p'>
            5.1 您同意并已充分了解本协议的条款，承诺不将已发表于本平台的信息，以任何形式发布或授权其它主体以任何方式使用(包括但限于在各类网站、媒体上使用)。
          </View>
          <View className='at-article__p'>
            5.2 除法律另有强制性规定外，未经本平台书面许可，任何单位或个人不得以任何方式全部或部分复制、转载、引用、链接、抓取或以其他方式使用本平台的信息内容，如有违反，本平台有权追究其法律责任。
          </View>
          <View className='at-article__h3'>六、隐私声明</View>
          <View className='at-article__p'>
            6.1 保护您隐私是本平台的一项基本政策。
          </View>
          <View className='at-article__p'>
            6.2 本平台深知个人信息安全的重要性，本平台将按照法律法规要求，采取安全保护措施，保护您的个人信息安全。具体详见《常德市第四人民医院小程序/公众号隐私政策》。
          </View>
          <View className='at-article__h3'>七、收费服务</View>
          <View className='at-article__p'>
            7.1 本平台的相关服务是以收费方式提供的，如您使用收费服务，请遵守相关的协议。
          </View>
          <View className='at-article__p'>
            7.2 请您在支付费用时，仔细阅读收费服务的相关协议，除协议约定的情况外，否则，本平台将不予退费。退费的方式视支付方式的不同而不同。用户应严格依据退费方式及退费周期收回退款。
          </View>
          <View className='at-article__h3'>八、协议的中止或终止</View>
          <View className='at-article__p'>
            8.1 用户需理解本平台需要定期或不定期地对提供服务的平台或相关的设备进行检修或者维护，如因此类情况而造成服务在合理时间内的中断，本平台无需为此承担任何责任。
          </View>
          <View className='at-article__p'>
            8.2 用户如提供虚假信息或实施其他违反本协议的行为，本平台有权立即中止对用户提供全部或部分服务。
          </View>
          <View className='at-article__p'>
            8.3 用户需保障和维护平台的利益，用户如在使用过程中实施不正当行为而给平台、平台医生或其他第三方造成任何损失，本平台有权终止服务。
          </View>
          <View className='at-article__p'>
            8.4 若用户违反本协议或相关规定，工作人员多次交涉未果，或因用户的行为造成损失的，本平台有权终止与用户的协议，并冻结用户个人账户以及要求用户赔偿因此造成的损失。
          </View>
          <View className='at-article__h3'>九、免责条款</View>
          <View className='at-article__p'>
            9.1 本平台的问诊服务，仅向部分慢性病，常见病及多发病等复诊患者提供，初诊患者请去线下门诊进行诊疗，切勿故意隐瞒或虚报。由此造成的不良后果，本平台不承担任何责任。
          </View>
          <View className='at-article__p'>
            9.2 在接受线上诊疗的过程中，请您真实描述病情，回答医生提出的问题，切勿故意隐瞒或虚报。由此造成的不良后果，本平台不承担任何责任。因下列情形之一的，本平台不承担赔偿责任:
          </View>
          <View className='at-article__p'>
            (1)惠者或者其近亲属不配合进行符合诊疗规范的诊疗;
          </View>
          <View className='at-article__p'>
            (2)医务人员在紧急情况下已经尽到合理诊疗义务;
          </View>
          <View className='at-article__p'>
            (3)限于当时的医疗水平难以诊疗
          </View>
          <View className='at-article__p'>
            9.3 因台风、火灾、地震、海啸、洪水、停电、战争、恐怖袭击、罢工、劳动争议、生产力或生产资料不足、战争等国际通用不可抗力因素造成的损失(包括但不限于信息损失，服务中断，资料灭失)，本平台在法律允许的范围内免责。
          </View>
          <View className='at-article__p'>
            9.4 在法律允许的范围内，对以下情形导致的服务中断或受阻不承担责任:
          </View>
          <View className='at-article__p'>
            (1)受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏;
          </View>
          <View className='at-article__p'>
            (2)用户或电脑软件、系统、硬件和通信线路出现故障;
          </View>
          <View className='at-article__p'>
            (3)用户操作不当;
          </View>
          <View className='at-article__p'>
            (4)用户通过非授权的方式使用服务;
          </View>
          <View className='at-article__p'>
            9.5 在使用本平台服务的过程中，可能会遇到网络信息或其他用户行为带来的风险，这些风险包括但不限于:
          </View>
          <View className='at-article__p'>
            (1)来自他人匿名或冒名的含有威胁、诽谤、令人反感或非法内容的信息;
          </View>
          <View className='at-article__p'>
            (2)因使用本协议项下的服务，遭受他人误导、欺骗或其他导致或可能导致的任何心理、生理上的伤害以及经济上的损失;
          </View>
          <View className='at-article__p'>
            (3)其他因网络信息或用户行为引起的风险。本平台不对因该风险造成的影响信息的真实性、适用性、合法性承担责任，也不对因侵权行为给用户造成的损害(包括但不限于信息损失，服务中断，资料灭失)负责。
          </View>
          <View className='at-article__h3'>十、法律适用及其他</View>
          <View className='at-article__p'>
            10.1本协议的订立、执行、解释及争议的解决均应适用中国人民共和国法律及法规。如发生本协议部分内容与适用法律相抵触时，此部分协议抵触内容应以适用法律为准，同时此部分协议抵触内容不影响协议其他部分的效力，即协议其他部分继续有效。
          </View>
          <View className='at-article__p'>
            10.2 用户的任何意见和建议均可通过客服电话微信向工作人员反馈。因本协议产生争议，由双方协商解决;协商不成的，任何一方都有权向有管辖权的中华人民共和国大陆地区法院提起诉讼。
          </View>
        </View>
      </View>
    </View>
  )
}
