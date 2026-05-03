import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function EnvelopesSeguranca() {
  const envelopes = [
    { id: 'ENV-CLP-COAG-v4.1', planta: 'ETA Campo Limpo', loop: 'Coagulação', versao: 'v4.1', vigente: 'sim', desde: '15 mar 2026', aprovacoes: '2/2', proxima: 'em revisão (v4.2)' },
    { id: 'ENV-CLP-DES-v3.2', planta: 'ETA Campo Limpo', loop: 'Desinfecção', versao: 'v3.2', vigente: 'sim', desde: '01 abr 2026', aprovacoes: '2/2', proxima: '—' },
    { id: 'ENV-CLP-FLU-v1.4', planta: 'ETA Campo Limpo', loop: 'Fluoretação', versao: 'v1.4', vigente: 'sim', desde: '01 abr 2026', aprovacoes: '2/2', proxima: '—' },
    { id: 'ENV-CLP-PH-v2.0', planta: 'ETA Campo Limpo', loop: 'Correção pH pós', versao: 'v2.0', vigente: 'sim', desde: '20 mar 2026', aprovacoes: '2/2', proxima: '—' },
    { id: 'ENV-GUA-COAG-v2.3', planta: 'ETA Guaraú', loop: 'Coagulação', versao: 'v2.3', vigente: 'sim', desde: '12 fev 2026', aprovacoes: '2/2', proxima: '—' },
    { id: 'ENV-GUA-DES-v2.1', planta: 'ETA Guaraú', loop: 'Desinfecção', versao: 'v2.1', vigente: 'sim', desde: '15 fev 2026', aprovacoes: '2/2', proxima: '—' },
  ];

  const limites = [
    { param: 'dos_coagulante_real', min: '6.0', tipico: '12.0', max: '28.0', taxaMaxVar: '2 mg/L por 5min', cond: '—', unidade: 'mg/L' },
    { param: 'dos_alcalinizante_real', min: '2.0', tipico: '5.0', max: '15.0', taxaMaxVar: '1 mg/L por 5min', cond: 'pH < 6.5 ⇒ aplicar', unidade: 'mg/L' },
    { param: 'pH_pos_coagulacao', min: '5.8', tipico: '6.4', max: '7.2', taxaMaxVar: '0.3 pH por 10min', cond: '—', unidade: 'pH' },
    { param: 'turb_decantada', min: '—', tipico: '2.0', max: '5.0', taxaMaxVar: '—', cond: 'alarme ≥ 4.0', unidade: 'uT' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Governança operacional', 'Envelopes de segurança']}
        title="Envelopes de segurança"
        lead="Limites versionados por planta e por loop. Versionamento imutável, dupla aprovação para mudanças, fallback automático para modo seguro quando condições são violadas."
        actions={<>
          <BtnSecondary>Histórico de versões</BtnSecondary>
          <BtnPrimary>Propor novo envelope</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Envelopes vigentes" value="6" hint="3 plantas · 6 loops" />
        <Metric label="Em revisão" value="1" hint="ENV-CLP-COAG-v4.2" />
        <Metric label="Violações 30d" value="1" hint="28 abr · fallback automático" />
        <Metric label="Idade média" value="48 dias" hint="revisão típica trimestral" />
      </div>

      <CalloutBlock tone="warn" title="Pendente — exige aprovação de dois engenheiros responsáveis">
        Proposta v4.2 do envelope ENV-CLP-COAG: ampliar dos_coagulante_real max de 28.0 para 32.0 mg/L para acomodar Paiva Castro pré-2027 (turbidez bruta sazonal mais alta).
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Aprovação em curso</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <div style={{
            backgroundColor: t.colors.emberMist,
            borderBottom: `1px solid ${t.colors.ember}`,
            padding: '10px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <div style={{ width: 10, height: 10, backgroundColor: t.colors.ember }} />
            <div style={{ fontSize: 12, fontWeight: 500, color: t.colors.ember, letterSpacing: '0.02em' }}>
              ENV-CLP-COAG-v4.2 · Pendente — 1/2 aprovações
            </div>
          </div>
          <div style={{ padding: 24 }}>
            <div style={{ fontSize: 12, color: t.colors.stone, marginBottom: 4 }}>Mudança proposta</div>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 24, color: t.colors.ink }}>
              Ampliar dos_coagulante_real max de 28.0 para 32.0 mg/L · Pré-Paiva Castro
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <ApprovalSlot status="approved" name="Marina Costa" role="Engª responsável · CREA-SP 5063147821" timestamp="02 mai 2026 · 14:32" />
              <ApprovalSlot status="pending" />
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 20, paddingTop: 16, borderTop: `1px solid ${t.colors.bone}` }}>
              <BtnSecondary>Cancelar proposta</BtnSecondary>
              <BtnPrimary>Aprovar como segundo</BtnPrimary>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="estrutura típica de um envelope">Limites do ENV-CLP-COAG-v4.1</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Parâmetro</th>
                <th style={thStyle({ textAlign: 'right' })}>Min</th>
                <th style={thStyle({ textAlign: 'right' })}>Típico</th>
                <th style={thStyle({ textAlign: 'right' })}>Max</th>
                <th style={thStyle({ textAlign: 'center' })}>Unidade</th>
                <th style={thStyle()}>Taxa máx. variação</th>
                <th style={thStyle()}>Condição combinada</th>
              </tr>
            </thead>
            <tbody>
              {limites.map((l, i) => (
                <tr key={i} style={{ borderBottom: i < limites.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, color: t.colors.navy })}>{l.param}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 13 })}>{l.min}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 13, fontWeight: 500 })}>{l.tipico}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 13 })}>{l.max}</td>
                  <td style={tdStyle({ textAlign: 'center', fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{l.unidade}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{l.taxaMaxVar}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone, fontStyle: 'italic' })}>{l.cond}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="6 vigentes">Envelopes em vigência</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Planta</th>
                <th style={thStyle()}>Loop</th>
                <th style={thStyle({ textAlign: 'center' })}>Versão</th>
                <th style={thStyle()}>Desde</th>
                <th style={thStyle({ textAlign: 'center' })}>Aprovações</th>
                <th style={thStyle()}>Próxima ação</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {envelopes.map((e, i) => (
                <tr key={e.id} style={{ borderBottom: i < envelopes.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy })}>{e.id}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{e.planta}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{e.loop}</td>
                  <td style={tdStyle({ textAlign: 'center', fontFamily: t.font.mono, fontSize: 12, fontWeight: 500 })}>{e.versao}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{e.desde}</td>
                  <td style={tdStyle({ textAlign: 'center' })}><Badge type="forest">{e.aprovacoes}</Badge></td>
                  <td style={tdStyle({ fontSize: 11, color: e.proxima === '—' ? t.colors.mist : t.colors.ember, fontStyle: e.proxima === '—' ? 'normal' : 'italic' })}>{e.proxima}</td>
                  <td style={tdStyle({ textAlign: 'right' })}><BtnGhost>Detalhes</BtnGhost></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Política de fallback automático</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <p style={{ fontSize: 13, color: t.colors.stone, lineHeight: 1.6, margin: 0, marginBottom: 16 }}>
            Quando condições do envelope são violadas, o loop transita automaticamente para um modo mais conservador. Operação humana é restaurada e a transição é registrada como evento auditável.
          </p>
          <FallbackRow gatilho="Valor fora de [min, max]" acao="Auto → DSS · operador retoma controle" />
          <FallbackRow gatilho="Taxa de variação acima do limite" acao="Auto → DSS · setpoint congelado no último válido" />
          <FallbackRow gatilho="Variável crítica missing > limite" acao="Auto → Manual · plataforma só observa" />
          <FallbackRow gatilho="Conflito entre loops dependentes" acao="Auto → DSS em ambos os loops" last />
        </div>
      </div>
    </div>
  );
}

function ApprovalSlot({ status, name, role, timestamp }) {
  const isApproved = status === 'approved';
  return (
    <div style={{
      border: `1px solid ${isApproved ? t.colors.forest : t.colors.bone}`,
      backgroundColor: isApproved ? t.colors.forestMist : t.colors.paper,
      padding: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{
          width: 8, height: 8, borderRadius: 4,
          backgroundColor: isApproved ? t.colors.forest : t.colors.mist,
        }} />
        <span style={{
          fontSize: 11, fontWeight: 500,
          color: isApproved ? t.colors.forest : t.colors.slate,
          letterSpacing: '0.06em',
        }}>{isApproved ? 'APROVADO' : 'AGUARDANDO'}</span>
      </div>
      {isApproved ? (
        <>
          <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{name}</div>
          <div style={{ fontSize: 11, color: t.colors.stone, marginBottom: 6 }}>{role}</div>
          <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate }}>{timestamp}</div>
        </>
      ) : (
        <div style={{ fontSize: 12, color: t.colors.slate, lineHeight: 1.5 }}>
          Aguardando segundo aprovador com perfil engenheiro responsável distinto do primeiro.
        </div>
      )}
    </div>
  );
}

function FallbackRow({ gatilho, acao, last }) {
  return (
    <div style={{
      padding: '10px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: 16,
      alignItems: 'center',
    }}>
      <span style={{ fontSize: 12, color: t.colors.ink }}>{gatilho}</span>
      <span style={{ color: t.colors.mist, fontSize: 14 }}>→</span>
      <span style={{ fontSize: 12, color: t.colors.stone, fontFamily: t.font.mono, textAlign: 'right' }}>{acao}</span>
    </div>
  );
}
