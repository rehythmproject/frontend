import './MainUsageListContentsPage.css';

const MainUsageListContentsPage = () => {
  return (
    <div className='MainUsageListContentsPage'>
      <div className='MainUsageListContentsPage_title'>
        <h3>몬드리안 회사와 미팅</h3>
        <div>사용한 모델기록</div>
      </div>

      <div className='MainUsageListContentsPage_container'>
      <div className="list_content_summary">
        <h4>음성기록</h4>
        <div className="list_counter">120</div>
      </div>
      <div className='user_content'>
        <div className='user_content1'>

        </div>
        <div className='user_content2'>
          회의 delLa :
          <h3>
          회의의 방향성과 목적은 각 분야별로 프로젝트의 기술 스택과 구조를 논의하고, 피드백을 통해 최적의 솔루션을 찾는 것입니다. 이번 회의에서는 프론트엔드, 백엔드, 데이터베이스, 보안 등 주요 분야에 대한 초기 방향성이 설정되었습니다.
          </h3>
          <h2>회의 방향성:</h2>
          프론트엔드: 사용자 경험을 중시하며, React를 사용하여 컴포넌트 기반 UI 개발을 진행합니다. CSS 프레임워크로는 Material-UI 등을 고려합니다.
          <h2>백엔드: </h2>React와의 연동을 고려하여 RESTful API를 제공하며, 비동기 처리를 효율적으로 할 수 있는 구조로 설계합니다.
          <h2>데이터베이스: </h2>PostgreSQL을 기본으로 사용하고, 필요에 따라 NoSQL인 MongoDB와 혼용하여 스케일링을 고려합니다.
          {/* <h2>보안: </h2>인증 강화를 위해 OAuth 2.0과 JWT를 사용하며, 데이터 전송은 HTTPS를 통해 암호화합니다. 서버 측 보안 규칙을 철저히 준수합니다.
          <h2>데이터베이스 마이그레이션:</h2> Flyway나 Liquibase 같은 도구를 사용하여 데이터베이스 마이그레이션을 관리합니다.
          <h2>추가로 필요한 기술 및 솔루션:</h2>
          프론트엔드 성능 최적화: 코드 스플리팅, Lazy Loading 등을 통해 초기 로딩 성능을 개선할 수 있습니다.
          <h2>백엔드 확장성: </h2>마이크로서비스 아키텍처를 고려하여 각 서비스의 독립성을 확보하고, 필요시 확장할 수 있는 구조를 마련합니다.
          <h2>데이터베이스 성능 최적화: </h2>인덱싱, 쿼리 최적화, 캐싱 전략을 통해 데이터베이스 성능을 높일 수 있습니다.
          <h2>보안 테스트: </h2>정기적인 보안 테스트 및 모의 해킹을 통해 시스템의 취약점을 점검하고 강화합니다.
          <h2>CI/CD 파이프라인 구축: </h2> 자동화된 배포 파이프라인을 구축하여 개발 및 배포 효율성을 높입니다.
              각 분야별로 세부 설계를 진행하면서 위의 추가 솔루션들을 고려하여 다음 회의 때 더 구체적인 계획을 논의할 수 있도록 준비하면 좋겠습니다. */}
        </div>
      </div>
      </div>
    </div>
  )
}

export default MainUsageListContentsPage;