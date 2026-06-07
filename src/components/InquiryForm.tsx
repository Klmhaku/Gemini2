/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Building2, Send, CheckCircle, Database, Server, RefreshCw } from 'lucide-react';
import { Inquiry } from '../types';

export default function InquiryForm() {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [robotType, setRobotType] = useState('NexBot v1.0 Cognitive Standard');
  const [message, setMessage] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Load initial inquiries from localStorage to mock actual database storage
  useEffect(() => {
    const saved = localStorage.getItem('giga_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    } else {
      // Seed initial dummy inquiries
      const initial: Inquiry[] = [
        {
          id: 'INQ-4201',
          name: '김하쿠',
          organization: 'Tesla Robotics Division Korea',
          email: 'haku@tesla.co.kr',
          phone: '010-1234-5678',
          robotType: 'NexBot v1.0 Premium Actuators edition',
          message: '기가 교육 플랫폼과의 특수 인공지능 제어 모듈 양산에 따른 지사 교육용 디바이스 30대 선주문 및 기술 교환 미팅을 희망합니다.',
          createdAt: '2026-06-06 14:10:00',
          status: 'approved'
        },
        {
          id: 'INQ-3912',
          name: '김은지',
          organization: '대치 프라임 영재관',
          email: 'eunji@daechiprime-edu.com',
          phone: '010-9876-5432',
          robotType: 'NexBot v1.0 Cognitive Standard',
          message: '대치 거점 고등 하이테크반 개설에 따라, 예체능 및 정밀 연산 트래킹 실습 장비의 라이센싱 구도 설명회 초청 가안을 발송했습니다.',
          createdAt: '2026-06-06 09:12:45',
          status: 'reviewed'
        }
      ];
      setInquiries(initial);
      localStorage.setItem('giga_inquiries', JSON.stringify(initial));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('성명, 이메일, 문의사항 정보는 필수 항목입니다.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newInq: Inquiry = {
        id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
        name,
        organization: organization || '개인 학습자 / 프리랜서',
        email,
        phone: phone || '전화번호 미입력',
        robotType,
        message,
        createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
        status: 'pending'
      };

      const updated = [newInq, ...inquiries];
      setInquiries(updated);
      localStorage.setItem('giga_inquiries', JSON.stringify(updated));

      // Reset form fields
      setName('');
      setOrganization('');
      setEmail('');
      setPhone('');
      setMessage('');
      
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Automated state transformation: simulating a backend processing the request
      setTimeout(() => {
        setInquiries(prevInq => {
          const modStr = prevInq.map(item => {
            if (item.id === newInq.id) {
              return { ...item, status: 'reviewed' };
            }
            return item;
          });
          localStorage.setItem('giga_inquiries', JSON.stringify(modStr));
          return modStr as Inquiry[];
        });
      }, 5000);

    }, 1200);
  };

  const clearAllInquiries = () => {
    if (window.confirm('저장된 문의 내역을 초기화하시겠습니까? (시드 데이터는 보존됩니다)')) {
      localStorage.removeItem('giga_inquiries');
      setInquiries([]);
    }
  };

  return (
    <section id="inquiry" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-50/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-purple-700 uppercase tracking-wider mb-4 shadow-sm">
            <span>CONSULTING REGISTER</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-none">
            GIGA 하이테크 <span className="text-purple-600 font-display">교육 상담 및 문의</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed max-w-lg mx-auto">
            김하쿠를 사랑하는 아기구미의 특화 로보틱 하이엔드 코스 상담입니다. 문의를 성심껏 기재해 남겨주시면 관리자가 실시간 연계 검토 후 즉각 발안 처리해드립니다.
          </p>
        </div>

        {/* Master layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="inquiry-grid">
          
          {/* Left Column: Premium Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-[0_15px_30px_rgba(15,23,42,0.02)]">
              <h3 className="font-display font-semibold text-slate-900 text-lg sm:text-xl tracking-tight mb-6">
                실시간 발안 컨설팅 신청서
              </h3>

              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-purple-100/50 border border-purple-200 p-6 rounded-2xl text-center space-y-4"
                  id="submit-success-card"
                >
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-lg">상담 제안 접수 완료</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xs mx-auto">
                      입력하신 메일로 회신 요약본이 전송되었습니다. 하단 콘솔에서 실시간 상태 변화를 추적하십시오!
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-white border border-slate-200 hover:border-purple-300 text-purple-700 font-semibold px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    새로운 문의 추가 등록
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="consulting-form">
                  
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="fullname" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-tight">
                        성명 (필수)
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        required
                        placeholder="김구미"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="org" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-tight">
                        소속 기관 / 직함
                      </label>
                      <input
                        type="text"
                        id="org"
                        placeholder="OO 코딩 연구단"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-tight">
                        이메일 주소 (필수)
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="gumi@kakaocorp.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 transition-colors animate-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-tight">
                        연락처 / 연락방도
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          id="phone"
                          placeholder="010-0000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Robot Selection Model */}
                  <div className="space-y-1.5">
                    <label htmlFor="robot-selector" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-tight">
                      관심 제품 모델 및 교육 트랙
                    </label>
                    <select
                      id="robot-selector"
                      value={robotType}
                      onChange={(e) => setRobotType(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
                    >
                      <option value="NexBot v1.0 Cognitive Standard">NexBot v1.0 Cognitive Standard (기본 지능 스펙형)</option>
                      <option value="NexBot v1.0 Premium Actuators edition">NexBot v1.0 Premium Actuators (완격 액추에이터 탑재형)</option>
                      <option value="Only MuJoCo Digital Twin Simulator">Only MuJoCo Digital Twin Simulator (정밀 소프트웨어 시뮬레이터)</option>
                      <option value="Kimi Haku Limited Giga Education Master Pack">김하쿠 리미티드 Giga 마스터 로보틱 팩</option>
                    </select>
                  </div>

                  {/* Message Detail Box */}
                  <div className="space-y-1.5">
                    <label htmlFor="message-box" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-tight">
                      구체적 문의 내용 (필수)
                    </label>
                    <textarea
                      id="message-box"
                      required
                      rows={4}
                      placeholder="학습 희망 동기 혹은 로봇 인프라 구축 희망 구도를 자유롭게 서술해주십시오."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 bg-slate-950 border border-slate-900 hover:bg-purple-600 hover:border-purple-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md hover:scale-[1.01] cursor-pointer"
                    id="submit-inquiry-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-white" />
                        <span>보안 암호화 데이터베이스 저장 프로파일링 중...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-purple-300" />
                        <span>서버로 기가 제안서 발안 전송</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

          {/* Right Column: Live Inquiry Console Dashboard (Highly polished admin-feeling view) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white h-full flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <Database className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono text-slate-200 uppercase tracking-wider font-semibold">
                      Kimi Haku Cloud Database Registry
                    </span>
                  </div>
                  <button
                    onClick={clearAllInquiries}
                    className="text-[9px] font-mono text-slate-500 hover:text-red-400 border border-slate-850 bg-slate-900 px-2 py-0.5 rounded cursor-pointer"
                  >
                    CONSOLE RESET
                  </button>
                </div>
                
                <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                  본 섹션은 데모 연합 검토용 <strong>마이크로 로컬 데이터 저장소 콘솔(Local Database)</strong>입니다. 문의를 제출하면 아래 실시간 세션 서버로그에 즉시 반영되며, 5초 동안 분석이 가동된 후 샌드박스의 승인 단계 전환(pending → reviewed) 코드를 목격하실 수 있습니다.
                </p>

                {/* Simulated database list entries */}
                <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1" id="inquiry-console-entries">
                  <AnimatePresence initial={false}>
                    {inquiries.length === 0 ? (
                      <div className="text-center py-10 border border-dashed border-slate-800 rounded-2xl">
                        <Server className="w-8 h-8 text-slate-700 mx-auto mb-2" />
                        <p className="text-xs font-mono text-slate-500 uppercase">NO ACTIVE RECORDS LOCATED</p>
                      </div>
                    ) : (
                      inquiries.map((inq) => (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          key={inq.id}
                          className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 text-xs"
                        >
                          <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                            <div className="flex items-center space-x-2 font-mono">
                              <span className="text-purple-400 font-bold">{inq.id}</span>
                              <span className="text-slate-600">|</span>
                              <span className="text-slate-300 font-semibold">{inq.name}</span>
                              <span className="text-slate-500">({inq.organization})</span>
                            </div>
                            
                            {/* Status logic */}
                            <div className="font-mono text-[9px] font-bold">
                              {inq.status === 'pending' && (
                                <span className="flex items-center space-x-1 text-yellow-400 animate-pulse bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded-full">
                                  <span className="w-1 h-1 rounded-full bg-yellow-400" />
                                  <span>PENDING (AI ANALYZING)</span>
                                </span>
                              )}
                              {inq.status === 'reviewed' && (
                                <span className="flex items-center space-x-1 text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                                  <span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
                                  <span>REVIEWED & SORTED</span>
                                </span>
                              )}
                              {inq.status === 'approved' && (
                                <span className="flex items-center space-x-1 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                                  <span>SYSTEM VERIFIED & OK</span>
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="space-y-1 text-slate-400">
                            <p className="text-[10px]"><strong className="text-slate-500 text-[10px] font-mono">TRACK:</strong> {inq.robotType}</p>
                            <p className="leading-snug text-slate-300 font-normal">{inq.message}</p>
                          </div>

                          <div className="text-[9px] text-slate-500 text-right pt-1 font-mono">
                            REGISTERED ON: {inq.createdAt}
                          </div>
                        </motion.div>
                      ))
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Console status telemetry row at the bottom of the card */}
              <div className="border-t border-slate-800 pt-4 mt-6 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>SYNC ENGINE ON</span>
                </div>
                <div>
                  <span>TOTAL ARCHIVED: {inquiries.length}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
