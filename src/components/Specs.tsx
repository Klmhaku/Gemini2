/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, RotateCw, Eye, Move, BatteryCharging, Shield, Check, Info } from 'lucide-react';
import { ROBOT_SPECS } from '../data';
import { RobotSpec } from '../types';

export default function Specs() {
  const [selectedSpec, setSelectedSpec] = useState<RobotSpec>(ROBOT_SPECS[0]);

  // Icons mapper for specific category indexes
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return Cpu;
      case 1: return RotateCw;
      case 2: return Eye;
      case 3: return Move;
      case 4: return BatteryCharging;
      default: return Shield;
    }
  };

  // Extra rich dummy engineering data to display in the side Panel when clicked
  const getTelemetryData = (specName: string) => {
    if (specName.includes('AI Core')) {
      return {
        bandwidth: '1.2 TB/s Memory Speed',
        latency: '1.14 ms Cognitive Frame Cycle',
        voltage: '12V logic rail',
        efficiency: '98.4% Neural Map Pruning'
      };
    }
    if (specName.includes('Torque')) {
      return {
        bandwidth: '4.2 kHz Control Loop Resolution',
        latency: '0.8 ms Joint Feedback response',
        voltage: '48V high-torque bus',
        efficiency: '95% Actuator Power Integration'
      };
    }
    if (specName.includes('Vision')) {
      return {
        bandwidth: '5.0 Gbps Camera Data Link',
        latency: '2.3 ms Stereo Disparity Depth Map',
        voltage: '5V auxiliary rail',
        efficiency: 'LiDAR pointcloud cloud parsing'
      };
    }
    if (specName.includes('Ti-Alloy')) {
      return {
        bandwidth: 'High Strength-to-Weight 350 MPa',
        latency: 'N/A Structural Static Node',
        voltage: 'Electrostatic discharge grounded',
        efficiency: 'Full modular skeleton layout'
      };
    }
    if (specName.includes('tesla') || specName.includes('Tesla')) {
      return {
        bandwidth: 'Fast charging charging protocol (80% in 45m)',
        latency: 'Continuous telemetry stream active',
        voltage: '96V Nominal Pack Architecture',
        efficiency: 'Regenerative power cell absorption'
      };
    }
    return {
      bandwidth: '114 points localized multiplexing',
      latency: '0.5 ms touch sensory alert',
      voltage: '3.3V bias voltage',
      efficiency: 'High-density micro-resistive film'
    };
  };

  const telemetry = getTelemetryData(selectedSpec.name);

  return (
    <section id="specs" className="py-24 bg-slate-50 relative border-t border-b border-rose-500/0 overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100/60 border border-purple-200 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-purple-700 uppercase tracking-wider mb-4 shadow-sm">
            <span>NEXBOT COGNITIVE ROBOT TECH SPECS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-none">
            NexBot v1.0 <span className="text-purple-600 font-display">혁신 하드웨어 사양</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed max-w-lg mx-auto">
            기가 교육 과정 동안 학생이 직접 프로그래밍하고 튜닝할 휴머노이드 로봇의 고정밀 공학 명세표입니다. 각 사양을 선택하여 실시간 원격 원조 매크로 정보를 파악하십시오.
          </p>
        </div>

        {/* Master Details Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Table / Selectors: 7 Grid Cols */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest px-2">
              주요 하드웨어 컴포넌트 목록
            </p>
            <div className="space-y-3">
              {ROBOT_SPECS.map((spec, index) => {
                const Icon = getCategoryIcon(index);
                const isSelected = selectedSpec.name === spec.name;
                return (
                  <button
                    key={spec.name}
                    id={`spec-item-${index}`}
                    onClick={() => setSelectedSpec(spec)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-white border-purple-300 shadow-[0_12px_24px_rgba(124,58,237,0.06)]'
                        : 'bg-white/55 border-slate-200/90 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Round icon wrapper */}
                      <div className={`p-3 rounded-xl transition-colors ${
                        isSelected ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase block">
                          {spec.category}
                        </span>
                        <span className="font-display font-semibold text-slate-900 text-base sm:text-lg block tracking-tight mt-0.5">
                          {spec.name}
                        </span>
                      </div>
                    </div>

                    <div className="text-right flex items-center space-x-3">
                      <span className={`text-xs sm:text-sm font-mono font-bold uppercase px-3 py-1 rounded-lg ${
                        isSelected ? 'bg-purple-50 text-purple-700 border border-purple-100' : 'bg-slate-50 text-slate-600 border border-slate-100'
                      }`}>
                        {spec.value}
                      </span>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-purple-600 font-bold" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Info className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detailed Telemetry Blueprint Card: 5 Grid Cols */}
          <div className="lg:col-span-5">
            <div className="h-full bg-slate-950 text-slate-100 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              {/* Telemetry background layout lines */}
              <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
              <div className="absolute top-1/2 right-0 w-48 h-48 bg-emerald-500/5 blur-3xl pointer-events-none" />
              
              <div>
                {/* Simulated Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
                    <span className="text-[10px] font-mono text-purple-400 tracking-widest uppercase font-bold">NEXBOT TELEMETRY DATA</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">SYSTEM: OPERATIONAL</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSpec.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-semibold">
                        SELECTED SPECIFICATION
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white tracking-tight mt-1">
                        {selectedSpec.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                        {selectedSpec.description}
                      </p>
                    </div>

                    {/* Real-time calculated technical stats */}
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center text-slate-400">
                        <span>전송 정밀 대역폭</span>
                        <span className="text-emerald-400 font-semibold">{telemetry.bandwidth}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-400">
                        <span>반응 피드백 지연율</span>
                        <span className="text-purple-400 font-semibold">{telemetry.latency}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-400">
                        <span>정격 전압 전원 프로토콜</span>
                        <span className="text-amber-400 font-semibold">{telemetry.voltage}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-400">
                        <span>효율 지표</span>
                        <span className="text-indigo-400 font-semibold">{telemetry.efficiency}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* High-end decorative schematics bottom banner */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">GIGA ACADEMY GEAR ID</p>
                  <p className="text-xs font-mono font-bold text-slate-300">#NEXBOT-COG-77A</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <div className="w-6 h-6 border border-dashed border-purple-500 rounded-full animate-spin duration-10000" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
