import { useState, useEffect } from 'react';
import './MainUsageListContentsPage.css';
import { BeatLoader } from 'react-spinners';

const MainUsageListContentsPage = () => {
  const [dataState, setDataState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataState(true);
    }, 2000); // 2초 후에 실행

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <div className='MainUsageListContentsPage'>
      <div className='MainUsageListContentsPage_title'>
        <h3>몬드리안 회사와 미팅</h3>
        <div>사용한 모델기록</div>
      </div>
      {
        dataState ? (
          <div className='MainUsageListContentsPage_container'>
      <div className="list_content_summary">
        <h4>음성기록</h4>
        <div className="list_counter">120</div>
      </div>
      <div className='user_content'>
        <div className='user_content1'>
          <div>"지난 주까지 목표했던 기능 개발은 순조롭게 진행되고 있나요? 각자 맡은 부분을 점검해 봅시다. 먼저 개발 쪽부터 이야기해 주시겠어요, 영희 씨?"</div>
          <div>"네, 현재 사용자 인증 시스템은 완벽하게 구현되었고, 로그인과 회원가입 기능도 테스트를 마쳤습니다. 다만 API 통합 작업이 조금 지연되고 있습니다. 외부 서비스와의 연결 과정에서 예상치 못한 오류가 발생해서 이를 해결하느라 시간이 좀 더 걸릴 것 같습니다. 하지만 큰 문제는 아니고, 하루 정도 더 작업하면 해결될 것 같습니다."</div>
          <div>"API 작업이 중요한 만큼 그 부분을 꼼꼼히 처리해 주세요. 오류가 발생한 이유는 파악이 된 건가요?"</div>
          <div>"네, 외부 서버에서 예상보다 오래 걸리는 응답 시간이 원인이었습니다. 이를 감안해 예외 처리를 보강하고 있습니다."</div>
          <div>"좋습니다. 박민수 씨, 디자인 쪽 진행 상황은 어떤가요?"</div>
          <div>"UI 디자인은 거의 완료되었습니다. 피드백을 바탕으로 색상 및 아이콘 배치 일부를 수정했고, 모바일 화면에서의 반응형 디자인에도 초점을 맞추고 있습니다. 특히 모바일 버전에서 사용자 경험을 더욱 직관적으로 만들기 위해 몇 가지 추가 작업을 진행 중입니다. 다만, 모바일 최적화에서 스크롤 문제를 발견했는데, 이 부분은 빠르게 수정할 수 있을 것 같습니다."</div>
          <div>"모바일 최적화는 매우 중요한 부분이니, 사용자가 자연스럽게 이용할 수 있도록 개선해 주세요. 그래픽과 애니메이션에 대한 최적화 작업도 잊지 말아 주세요."</div>
          <div>"네, 사용자 반응을 염두에 두고 좀 더 깔끔하고 미니멀한 디자인으로 방향을 잡고 있습니다."</div>
        </div>
        <div className='user_content2'>
          <h4>회의 delLa :</h4>
          <h4>
          회의의 방향성과 목적은 각 분야별로 프로젝트의 기술 스택과 구조를 논의하고, 피드백을 통해 최적의 솔루션을 찾는 것입니다. 이번 회의에서는 프론트엔드, 백엔드, 데이터베이스, 보안 등 주요 분야에 대한 초기 방향성이 설정되었습니다.
          </h4>
          <h4>회의 방향성:</h4>
          프론트엔드: 사용자 경험을 중시하며, React를 사용하여 컴포넌트 기반 UI 개발을 진행합니다. CSS 프레임워크로는 Material-UI 등을 고려합니다.
          <h4>백엔드: </h4>React와의 연동을 고려하여 RESTful API를 제공하며, 비동기 처리를 효율적으로 할 수 있는 구조로 설계합니다.
          <h4>데이터베이스: </h4>PostgreSQL을 기본으로 사용하고, 필요에 따라 NoSQL인 MongoDB와 혼용하여 스케일링을 고려합니다.
          <h4>보안: </h4>인증 강화를 위해 OAuth 2.0과 JWT를 사용하며, 데이터 전송은 HTTPS를 통해 암호화합니다. 서버 측 보안 규칙을 철저히 준수합니다.
          <h4>데이터베이스 마이그레이션:</h4> Flyway나 Liquibase 같은 도구를 사용하여 데이터베이스 마이그레이션을 관리합니다.
          <h4>추가로 필요한 기술 및 솔루션:</h4>
          프론트엔드 성능 최적화: 코드 스플리팅, Lazy Loading 등을 통해 초기 로딩 성능을 개선할 수 있습니다.
          <h4>백엔드 확장성: </h4>마이크로서비스 아키텍처를 고려하여 각 서비스의 독립성을 확보하고, 필요시 확장할 수 있는 구조를 마련합니다.
          <h4>데이터베이스 성능 최적화: </h4>인덱싱, 쿼리 최적화, 캐싱 전략을 통해 데이터베이스 성능을 높일 수 있습니다.
          <h4>보안 테스트: </h4>정기적인 보안 테스트 및 모의 해킹을 통해 시스템의 취약점을 점검하고 강화합니다.
          <h4>CI/CD 파이프라인 구축: </h4> 자동화된 배포 파이프라인을 구축하여 개발 및 배포 효율성을 높입니다.
              각 분야별로 세부 설계를 진행하면서 위의 추가 솔루션들을 고려하여 다음 회의 때 더 구체적인 계획을 논의할 수 있도록 준비하면 좋겠습니다.
        </div>
      </div>
      </div>
        ) :
        (
          <div className='MainUsageListContentsPage_container'>
      <div className="list_content_summary">
        <h4>음성기록</h4>
        <div className="list_counter">모델이 솔루션을 생각 중입니다!</div>
      </div>
      <div className='user_content false'>
      <BeatLoader className='BeatLoader' color="#9022FF" size={40} />
      <div className="list_content_summary loading_message">
        <h4>잠시만 기다려주세요...</h4>
      </div>
      </div>
      
      </div>
        )
      }
      
    </div>
  )
}

export default MainUsageListContentsPage;