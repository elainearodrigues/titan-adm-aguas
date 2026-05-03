import React, { useState } from 'react';
import { tokens } from './tokens.js';

import PlataformaProduto from './01_PlataformaProduto.jsx';
import IdentidadeAcesso from './02_IdentidadeAcesso.jsx';
import PrivacidadeLGPD from './03_PrivacidadeLGPD.jsx';
import SegurancaInformacao from './04_SegurancaInformacao.jsx';
import AuditoriaRetencao from './05_AuditoriaRetencao.jsx';
import ObservabilidadeSLA from './06_ObservabilidadeSLA.jsx';
import Continuidade from './07_Continuidade.jsx';
import Comunicacao from './08_Comunicacao.jsx';
import IntegracoesExternas from './09_IntegracoesExternas.jsx';

const subPaginas = [
  { id: 'plataforma', label: 'Plataforma como produto', component: PlataformaProduto, badge: null },
  { id: 'identidade', label: 'Identidade & acesso', component: IdentidadeAcesso, badge: null },
  { id: 'lgpd', label: 'Privacidade & LGPD', component: PrivacidadeLGPD, badge: { type: 'rust', text: '3' } },
  { id: 'seguranca', label: 'Segurança da informação', component: SegurancaInformacao, badge: null },
  { id: 'auditoria', label: 'Auditoria & retenção', component: AuditoriaRetencao, badge: null },
  { id: 'observabilidade', label: 'Observabilidade & SLA', component: ObservabilidadeSLA, badge: { type: 'ember', text: '1' } },
  { id: 'continuidade', label: 'Continuidade', component: Continuidade, badge: null },
  { id: 'comunicacao', label: 'Comunicação', component: Comunicacao, badge: null },
  { id: 'integracoes', label: 'Integrações externas', component: IntegracoesExternas, badge: { type: 'ember', text: '1' } },
];

const menuPrincipal = [
  {
    grupo: 'Configurações globais',
    itens: [
      { num: '01', label: 'Gestão da plataforma', active: true },
      { num: '02', label: 'Gestão de domínio', active: false },
      { num: '03', label: 'Governança operacional', active: false },
    ],
  },
  {
    grupo: 'Operação e ativos',
    itens: [
      { num: '04', label: 'Gestão de ativos e suprimentos', active: false },
      { num: '05', label: 'Configuração SCADA & IoT', active: false },
      { num: '06', label: 'GIS & estrutura espacial', active: false, disabled: true, phase: 'fase 2' },
      { num: '07', label: 'Gestão de energia', active: false },
      { num: '08', label: 'Distribuição', active: false, disabled: true, phase: 'fase 3' },
    ],
  },
  {
    grupo: 'Estrutura de prestação',
    itens: [
      { num: '09', label: 'Operadoras', active: false },
      { num: '10', label: 'Municípios', active: false },
      { num: '11', label: 'Sistemas produtores', active: false },
      { num: '12', label: 'Plantas', active: false },
      { num: '13', label: 'Templates regulatórios', active: false },
    ],
  },
  {
    grupo: 'Normativos e qualidade',
    itens: [
      { num: '14', label: 'Laboratório e amostragem', active: false },
      { num: '15', label: 'Outorgas', active: false },
      { num: '16', label: 'Parâmetros legais', active: false },
      { num: '17', label: 'Pacotes regulatórios', active: false },
    ],
  },
  {
    grupo: 'Conformidade e reporte',
    itens: [
      { num: '18', label: 'Dashboard multiplantas', active: false, disabled: true, phase: 'fase 2' },
      { num: '19', label: 'Conformidade regulatória', active: false, disabled: true, phase: 'fase 2' },
      { num: '20', label: 'Motor de titularidade', active: false, disabled: true, phase: 'fase 2' },
      { num: '21', label: 'Motor de exportação', active: false, disabled: true, phase: 'fase 2' },
    ],
  },
];

export default function TitanGestaoPlataforma() {
  const [active, setActive] = useState('plataforma');
  const [menuExpanded, setMenuExpanded] = useState(true);

  const ActiveComponent = subPaginas.find(s => s.id === active)?.component || PlataformaProduto;

  return (
    <div style={{
      fontFamily: tokens.font.sans,
      backgroundColor: tokens.colors.paper,
      color: tokens.colors.ink,
      minHeight: '100vh',
      fontSize: 14,
      lineHeight: 1.5,
    }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Serif:wght@400;500&display=swap" rel="stylesheet" />

      <TopBar />

      <div style={{
        display: 'grid',
        gridTemplateColumns: menuExpanded ? '260px 1fr' : '64px 1fr',
        minHeight: 'calc(100vh - 56px)',
        transition: 'grid-template-columns 200ms',
      }}>
        <SideMenu expanded={menuExpanded} onToggle={() => setMenuExpanded(!menuExpanded)} />

        <main style={{
          backgroundColor: tokens.colors.paper,
          minHeight: 'calc(100vh - 56px)',
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
        }}>
          <SubNav active={active} onSelect={setActive} />
          <div style={{ padding: '32px 48px', maxWidth: 1280, overflow: 'auto' }}>
            <ActiveComponent />
          </div>
        </main>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <header style={{
      height: 56,
      borderBottom: `1px solid ${tokens.colors.bone}`,
      backgroundColor: tokens.colors.pure,
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{
          fontFamily: tokens.font.sans,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: '0.32em',
          color: tokens.colors.ink,
        }}>T  I  T  A  N</div>
        <div style={{ width: 1, height: 16, backgroundColor: tokens.colors.bone }} />
        <div style={{
          fontSize: 12,
          color: tokens.colors.stone,
          fontFamily: tokens.font.mono,
        }}>Admin Águas <span style={{ color: tokens.colors.slate }}>·</span> Sabesp</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button style={{
          background: 'transparent',
          border: 'none',
          fontSize: 12,
          color: tokens.colors.slate,
          cursor: 'pointer',
          fontFamily: tokens.font.mono,
        }}>aguas.titan.sabesp.com.br</button>
        <div style={{ width: 1, height: 16, backgroundColor: tokens.colors.bone }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 14,
            backgroundColor: tokens.colors.navyMist,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: tokens.colors.navy, fontSize: 11, fontWeight: 500,
          }}>MC</div>
          <div style={{ fontSize: 12, color: tokens.colors.ink }}>Marina Costa</div>
        </div>
      </div>
    </header>
  );
}

function SideMenu({ expanded, onToggle }) {
  return (
    <aside style={{
      backgroundColor: tokens.colors.pure,
      borderRight: `1px solid ${tokens.colors.bone}`,
      paddingTop: 16,
      paddingBottom: 24,
      overflow: 'hidden',
    }}>
      <button onClick={onToggle} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        padding: '4px 16px', marginBottom: 16,
        fontSize: 11, color: tokens.colors.slate,
        fontFamily: tokens.font.mono, letterSpacing: '0.06em',
        textTransform: 'uppercase',
      }}>{expanded ? '◂ Recolher' : '▸'}</button>

      {expanded && menuPrincipal.map((g, gi) => (
        <div key={gi} style={{ marginBottom: 16 }}>
          <div style={{
            padding: '8px 16px',
            fontSize: 10,
            fontWeight: 500,
            color: tokens.colors.slate,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: tokens.font.mono,
          }}>{g.grupo}</div>
          {g.itens.map(item => (
            <div key={item.num} style={{
              padding: '6px 16px',
              fontSize: 12,
              color: item.disabled ? tokens.colors.mist : item.active ? tokens.colors.ink : tokens.colors.stone,
              fontWeight: item.active ? 500 : 400,
              backgroundColor: item.active ? tokens.colors.navyMist : 'transparent',
              borderLeft: item.active ? `2px solid ${tokens.colors.navy}` : '2px solid transparent',
              cursor: item.disabled ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontFamily: tokens.font.mono,
                  fontSize: 10,
                  color: item.disabled ? tokens.colors.mist : tokens.colors.slate,
                }}>{item.num}</span>
                <span>{item.label}</span>
              </div>
              {item.disabled && (
                <span style={{
                  fontSize: 9,
                  fontFamily: tokens.font.mono,
                  color: tokens.colors.mist,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>{item.phase}</span>
              )}
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
}

function SubNav({ active, onSelect }) {
  return (
    <nav style={{
      backgroundColor: tokens.colors.pure,
      borderRight: `1px solid ${tokens.colors.bone}`,
      padding: '24px 0',
    }}>
      <div style={{ padding: '0 20px', marginBottom: 16 }}>
        <div style={{
          fontSize: 10,
          fontWeight: 500,
          color: tokens.colors.slate,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontFamily: tokens.font.mono,
          marginBottom: 4,
        }}>01 · Gestão da plataforma</div>
        <div style={{ fontSize: 13, color: tokens.colors.ink, fontWeight: 500 }}>9 sub-páginas</div>
      </div>
      {subPaginas.map(s => (
        <button
          key={s.id}
          onClick={() => onSelect(s.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '8px 20px',
            background: 'none',
            border: 'none',
            textAlign: 'left',
            fontFamily: tokens.font.sans,
            fontSize: 12,
            color: active === s.id ? tokens.colors.ink : tokens.colors.stone,
            fontWeight: active === s.id ? 500 : 400,
            backgroundColor: active === s.id ? tokens.colors.navyMist : 'transparent',
            borderLeft: active === s.id ? `2px solid ${tokens.colors.navy}` : '2px solid transparent',
            cursor: 'pointer',
          }}
        >
          {s.label}
          {s.badge && (
            <span style={{
              padding: '1px 6px',
              fontSize: 10,
              fontFamily: tokens.font.mono,
              backgroundColor: s.badge.type === 'rust' ? tokens.colors.rustMist : tokens.colors.emberMist,
              color: s.badge.type === 'rust' ? tokens.colors.rust : tokens.colors.ember,
              borderRadius: 8,
            }}>{s.badge.text}</span>
          )}
        </button>
      ))}
    </nav>
  );
}
