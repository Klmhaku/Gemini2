/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CurriculumStep, RobotSpec, Accomplishment } from './types';

export const ROBOT_SPECS: RobotSpec[] = [
  {
    category: '지능 및 연산 (Cognition)',
    name: 'GIGA Cognitive AI Core v2',
    value: '800 TFLOPS Neural Engine',
    description: '인간의 신경망을 모방한 800 TFLOPS급 초고속 뉴로모픽 연산으로 자율 주행 및 고해상도 환경 인지 동작을 실시간으로 의사결정합니다.'
  },
  {
    category: '관절 및 액추에이터 (Actuation)',
    name: 'Ultra-High Torque Actuators',
    value: '42 전신 자유도 (Degrees of Freedom)',
    description: '테슬라 최신 로봇 공학을 계승한 고정밀 하모닉 드라이브 액추에이터는 부드럽고 정교하며 최대 150Nm의 토크 출력을 제공합니다.'
  },
  {
    category: '비전 및 센서 (Sensory)',
    name: 'Stereoscopic Vision Array',
    value: 'Double HDR Depth-sensing LiDAR',
    description: '광학 카메라 센서 및 소형 LiDAR 어레이를 통해 전방위 3D 공간을 실시간 포인트 클라우드로 매핑하고 장애물을 즉각적으로 회피합니다.'
  },
  {
    category: '디자인 및 체격 (Physical Specs)',
    name: 'Aerospace-Grade Ti-Alloy',
    value: '신장 173cm | 체중 56kg',
    description: '항공우주 등급의 티타늄-알루미늄 합금 프레임으로 제작되어 뛰어난 내구성과 가벼운 역학적 효율을 극대화하였습니다.'
  },
  {
    category: '배터리 및 동력 (Power Cell)',
    name: 'High-Density Liquid State Cell',
    value: 'Tesla-Grade 3.4 kWh 배터리',
    description: '에너지 밀도가 극대화된 차세대 리퀴드 메탈 셀 배터리를 장착하여 완전 충전 시 최대 8시간 연속 실감 교육 동작이 가능합니다.'
  },
  {
    category: '촉각 어레이 (Tactile System)',
    name: 'Dynamic Sensor Array Touch',
    value: '각 손가락 당 114개 디지털 센서',
    description: '손가락 끝마디에 배치된 미세 촉각 압력 분산 세그먼티브 센서를 통해 물체의 재질과 무게를 파악하고 손상 없이 파지합니다.'
  }
];

export const CURRICULUM_STEPS: CurriculumStep[] = [
  {
    phase: 'PHASE 01',
    title: '인지 로봇 공학 기틀 성립',
    subtitle: 'Robotics Core & Hardware Control',
    description: '로봇 하모닉 드라이브 제어, 모터 드라이브 튜닝 기술 및 센서 패킷 통신의 기틀을 학습합니다.',
    duration: '12주 과정 (주 2회)',
    tags: ['ROS2', 'C++ Control Unit', 'Sensors Processing']
  },
  {
    phase: 'PHASE 02',
    title: '자율 주행 및 공간 지능 학습',
    subtitle: 'SLAM Navigation & Spatial AI',
    description: '조도 보정 자율 경로 빌딩 알고리즘, Point-Cloud 융합 SLAM 기법 및 전방 매핑 인지 지능의 심화 교육입니다.',
    duration: '16주 과정 (주 2회)',
    tags: ['SLAM Pathing', 'LiDAR Mapping', 'Spatial Cognition']
  },
  {
    phase: 'PHASE 03',
    title: '다중 관절 키네마틱스 & 물리 제어',
    subtitle: 'Actuator Kinematics & Deep Physics',
    description: '역역학(Inverse Kinematics) 기반 물리엔진 시뮬레이션 및 전신 가제트 밸런싱 최적화 신경 코드를 작성합니다.',
    duration: '20주 과정 (주 3회)',
    tags: ['Inverse Kinematics', 'MuJoCo Sim', 'Force Control']
  },
  {
    phase: 'PHASE 04',
    title: '집단 지기 인공지능 & 클라우드 연동',
    subtitle: 'Swarm Robotics & GIGA Cloud Server',
    description: '최상위 기가 스케일 클라우드 신경망 브레인 합성을 활용한 로봇 간 통신, 다중 에이전트 자율 협업 미션을 해결합니다.',
    duration: '24주 과정 (주 3회)',
    tags: ['Swarm Intelligence', 'Cloud Brain Sync', 'Generative Control']
  }
];

export const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    year: '2026',
    title: '김하쿠 테슬라 연합 로봇 교육 인지 연구관 개소',
    category: 'Education',
    highlight: '국내 최초 휴머노이드 로봇 응용 교육관 유치',
    description: '전국 12개 테슬라 연계 아카데미에 NexBot 교육용 AI 소프트웨어 핵심 모듈 독점 공급 및 학위 연계 과정 개통.'
  },
  {
    year: '2026',
    title: 'IEEE 국제 로보틱스 학회 인지 지능 최우수상 획득',
    category: 'Competition',
    highlight: 'NexBot 기반 자율 충돌 회피 알고리즘 특허 출원 완료',
    description: '김하쿠를 사랑하는 아기구미 연구원들이 공동 주관한 가상 물리 강화학습 미션에서 172개 글로벌 탑팀 중 종합 1위 달성.'
  },
  {
    year: '2025',
    title: '글로벌 테슬라 휴머노이드 연합 실증 시범단 단독 선정',
    category: 'R&D',
    highlight: '실증 교육 장비 50대 조기 수입 및 인프라 매핑 성공',
    description: '미국 테슬라 로보틱스 지사와의 MOU에 의거, 최적화 튜닝 펌웨어 실증 개발 및 GIGA 기가급 교육생 대상 실무 트레이닝 완수.'
  },
  {
    year: '2024',
    title: '아기구미 기가 인공지능 커리큘럼 초고속 조기 가동',
    category: 'MOU',
    highlight: '교육 만족도 설문 99.4% 만족 평가 획득',
    description: 'AI 스튜디오 플랫폼 기반 개발 환경 교육 표준 모델을 완성하여 대치동 및 테헤란로 하이테크 벨트 교육 선점.'
  }
];
