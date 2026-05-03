import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function StatusComissionamento() {
  const fases = [
    { fase: '01', nome: 'Concepção e outorga', concluida: true, data: '2024 Q3', responsavel: 'Diretoria de Águas + DAEE-SP' },
    { fase: '02', nome: 'Obra civil de transferência', concluida: true, data: '2024-2025', responsavel: 'Construtora · Consórcio CPCS' },
    { fase: '03', nome: 'Comissionamento mecânico', concluida: true, data: '2025 Q4', responsavel: 'Sabesp + EPC' },
    { fase: '04', nome: 'Comissionamento hidráulico', concluida: true, data: '2025 Q4 → 2026 Q1', responsavel: 'Sabesp + ANA' },
    { fase: '05', nome: 'Caracterização química do manancial', concluida: false, atual: true, data: '2026 Q2 (em curso)', responsavel: 'Lab Sabesp + USP' },
    { fase: '06', nome: 'Atualização envelope ETA Campo Limpo', concluida: false, data: '2026 Q3', responsavel: 'Eng. responsáveis' },
    { fase: '07', nome: 'Treinamento de operadores ETA Campo Limpo', concluida: false, data: '2026 Q3 → Q4', responsavel: 'Sabesp Academy' },
    { fase: '08', nome: 'Operação assistida', concluida: false, data: '2026 Q4', responsavel: 'Operadora + EPC' },
    { fase: '09', nome: 'Início operacional', concluida: false, data: '01 jan 2027', responsavel: 'Sabesp' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Sistemas produtores', 'Status & comissionamento']}
        title="Status & comissionamento"
        lead="Acompanhamento de sistemas em comissionamento. Sistema Paiva Castro com entrada operacional prevista para Janeiro de 2027."
        actions={<>
          <BtnSecondary>Histórico de comissionamentos</BtnSecondary>
          <BtnPrimary>Marcar fase concluída</BtnPrimary>
        </>}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${t.colors.bone}` }}>
        <DomainPill domain="aguas" />
        <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>·</span>
        <span style={{ fontSize: 12, color: t.colors.stone }}>Conteúdo específico do domínio Águas</span>
        <div style={{ marginLeft: 'auto' }}>
          <CrossAdminLink to="efluentes" />
        </div>
      </div>

      <CalloutBlock tone="warn" title="Sistema Paiva Castro · entrada operacional Jan/2027">
        Sistema de transferência Cantareira → Reservatório Paiva Castro → ETA Campo Limpo. Atualmente em fase 5/9 (caracterização química). Mistura de águas brutas afetará química na captação ETA Campo Limpo, requerendo nova versão de envelope de coagulação (ENV-CLP-COAG-v4.2 em aprovação dupla no item #03).
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Sistemas em comissionamento" value="1" hint="Paiva Castro" />
        <Metric label="Fases concluídas" value="4/9" delta="44%" />
        <Metric label="Fase atual" value="05/09" hint="caracterização química" />
        <Metric label="Início operacional" value="01 jan 2027" hint="244 dias úteis" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de sistemas" />
        <SubTab label="Estrutura física" />
        <SubTab label="Status & comissionamento" active attention count={1} />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="9 fases · concepção → operação">Roadmap Sistema Paiva Castro</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          {fases.map((f, i) => (
            <FaseRow key={f.fase} fase={f} last={i === fases.length - 1} />
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        <div>
          <SectionLabel>Caracterização química preliminar</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
            <CharacRow param="Turbidez bruta sazonal" cantareira="3 a 18 NTU" paivaCastro="2 a 28 NTU" delta="+22% pico sazonal" />
            <CharacRow param="pH médio" cantareira="6.8" paivaCastro="6.4" delta="-0.4 unidades" />
            <CharacRow param="Alcalinidade" cantareira="32 mg/L CaCO3" paivaCastro="22 mg/L CaCO3" delta="-31%" />
            <CharacRow param="Demanda PAC" cantareira="10-14 mg/L" paivaCastro="14-20 mg/L (estimada)" delta="+40% pico" />
            <CharacRow param="Cor aparente" cantareira="15 uH" paivaCastro="22 uH" delta="+47%" last />
          </div>
        </div>

        <div>
          <SectionLabel>Impactos identificados</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
            <ImpactoRow item="Item #03 Envelope coagulação" desc="ENV-CLP-COAG-v4.2 amplia max PAC de 28 para 32 mg/L" status="aprovação dupla em curso" />
            <ImpactoRow item="Item #04 Bombas dosadoras" desc="BD-01 e BD-03 precisam de calibração após mudança de range" status="agendado para set/2026" />
            <ImpactoRow item="Item #14 Plano de amostragem" desc="Novo ponto de coleta na adutora Paiva Castro · análise turbidez horária" status="proposto" />
            <ImpactoRow item="Item #15 Outorga" desc="Outorga DAEE provisional emitida · definitiva até nov/2026" status="pendência DAEE-SP" last />
          </div>
        </div>
      </div>
    </div>
  );
}

function SubTab({ label, active, attention, count }) {
  return (
    <div style={{
      padding: '12px 18px',
      fontSize: 13,
      fontWeight: active ? 500 : 400,
      color: active ? t.colors.ink : t.colors.stone,
      borderBottom: active ? `2px solid ${t.colors.navy}` : '2px solid transparent',
      cursor: 'pointer',
      marginBottom: -1,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      {label}
      {count !== undefined && count > 0 && (
        <span style={{
          padding: '1px 6px',
          fontSize: 10,
          backgroundColor: attention ? t.colors.emberMist : t.colors.bone,
          color: attention ? t.colors.ember : t.colors.stone,
          borderRadius: 8,
          fontFamily: t.font.mono,
        }}>{count}</span>
      )}
    </div>
  );
}

function FaseRow({ fase, last }) {
  const isAtual = fase.atual;
  const isConcluida = fase.concluida;
  return (
    <div style={{
      padding: '14px 20px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'grid',
      gridTemplateColumns: '50px 16px 1fr 200px 200px',
      gap: 16,
      alignItems: 'center',
      backgroundColor: isAtual ? t.colors.emberMist + '40' : 'transparent',
    }}>
      <span style={{
        fontFamily: t.font.mono,
        fontSize: 13,
        fontWeight: 500,
        color: isConcluida ? t.colors.forest : isAtual ? t.colors.ember : t.colors.slate,
      }}>{fase.fase}</span>
      <span style={{
        width: 12, height: 12, borderRadius: 6,
        backgroundColor: isConcluida ? t.colors.forest : isAtual ? t.colors.ember : t.colors.bone,
        border: isAtual ? `2px solid ${t.colors.ember}` : 'none',
      }} />
      <span style={{
        fontSize: 13,
        fontWeight: isAtual ? 500 : 400,
        color: isConcluida || isAtual ? t.colors.ink : t.colors.stone,
      }}>{fase.nome}</span>
      <span style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate }}>{fase.data}</span>
      <span style={{ fontSize: 11, color: t.colors.stone, fontStyle: 'italic' }}>{fase.responsavel}</span>
    </div>
  );
}

function CharacRow({ param, cantareira, paivaCastro, delta, last }) {
  const negativo = delta.startsWith('+') || delta.includes('pico');
  return (
    <div style={{
      padding: '12px 16px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 6 }}>{param}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, fontSize: 11 }}>
        <div>
          <div style={{ color: t.colors.slate, marginBottom: 2 }}>Cantareira atual</div>
          <div style={{ fontFamily: t.font.mono, color: t.colors.ink }}>{cantareira}</div>
        </div>
        <div>
          <div style={{ color: t.colors.slate, marginBottom: 2 }}>Paiva Castro</div>
          <div style={{ fontFamily: t.font.mono, color: t.colors.ink }}>{paivaCastro}</div>
        </div>
        <div>
          <div style={{ color: t.colors.slate, marginBottom: 2 }}>Delta</div>
          <div style={{ fontFamily: t.font.mono, color: negativo ? t.colors.ember : t.colors.forest, fontWeight: 500 }}>{delta}</div>
        </div>
      </div>
    </div>
  );
}

function ImpactoRow({ item, desc, status, last }) {
  return (
    <div style={{
      padding: '12px 16px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.navy, marginBottom: 4 }}>{item}</div>
      <div style={{ fontSize: 12, color: t.colors.ink, marginBottom: 4 }}>{desc}</div>
      <div style={{ fontSize: 11, color: t.colors.slate, fontStyle: 'italic' }}>{status}</div>
    </div>
  );
}
