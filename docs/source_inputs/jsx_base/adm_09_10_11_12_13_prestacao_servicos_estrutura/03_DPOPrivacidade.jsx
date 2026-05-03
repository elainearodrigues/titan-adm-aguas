import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function DPOPrivacidade() {
  const dpos = [
    { operadora: 'Sabesp', dpo: 'Juliana Camargo', desde: '15 ago 2024', email: 'dpo@sabesp.com.br', telefone: '+55 11 3388-9100', publicado: 'sim' },
    { operadora: 'SAAE Campinas', dpo: 'Roberto Oliveira', desde: '20 set 2024', email: 'dpo@saaecampinas.com.br', telefone: '+55 19 3735-2222', publicado: 'sim' },
    { operadora: 'Águas Guariroba', dpo: 'Ana Vasconcelos', desde: '01 jul 2024', email: 'lgpd@aguasguariroba.com.br', telefone: '+55 67 3320-1500', publicado: 'sim' },
    { operadora: 'BRK Ambiental', dpo: 'Marcos Tavares', desde: '15 mai 2024', email: 'privacidade@brkambiental.com.br', telefone: '+55 11 4197-8000', publicado: 'sim' },
    { operadora: 'CAERN', dpo: 'pendente designação', desde: '—', email: '—', telefone: '—', publicado: 'não' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Operadoras', 'DPO & Privacidade']}
        title="DPO & Privacidade"
        lead="Encarregado de Dados designado por cada operadora conforme art. 41 da Lei 13.709/2018. Vínculo com ROPA central gerenciado em Gestão da plataforma."
        actions={<>
          <BtnSecondary>Vincular ao ROPA central</BtnSecondary>
          <BtnPrimary>Designar DPO</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="DPOs designados" value="4/5" hint="CAERN pendente" />
        <Metric label="Avisos publicados" value="4" hint="todas exceto CAERN" />
        <Metric label="ROPA centralizado" value="5 registros" hint="vinculado a Item 01" />
        <Metric label="Última auditoria" value="15 abr 2026" hint="cobertura 80%" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Identificação & contratos" />
        <SubTab label="Capacidade econ.-financeira" />
        <SubTab label="DPO & Privacidade" active />
        <SubTab label="Indicadores contratuais & SLA" attention count={3} />
      </div>

      <CalloutBlock tone="info" title="Encarregado de Dados (DPO) por operadora">
        Conforme art. 41 da Lei 13.709/2018, todo controlador de dados pessoais deve indicar encarregado, divulgar sua identidade e canais de comunicação. Em saneamento, dados de operadores, fornecedores e relação com municípios constituem base de tratamento.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="art. 41 Lei 13.709/2018">DPOs por operadora</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Operadora</th>
                <th style={thStyle()}>Encarregado</th>
                <th style={thStyle()}>Designado em</th>
                <th style={thStyle()}>Contato</th>
                <th style={thStyle({ textAlign: 'center' })}>Aviso publicado</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {dpos.map((d, i) => (
                <tr key={i} style={{ borderBottom: i < dpos.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500 })}>{d.operadora}</td>
                  <td style={tdStyle({ fontSize: 12, color: d.dpo === 'pendente designação' ? t.colors.rust : t.colors.ink, fontStyle: d.dpo === 'pendente designação' ? 'italic' : 'normal' })}>{d.dpo}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{d.desde}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy })}>{d.email}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {d.publicado === 'sim' ? <Badge type="forest">publicado</Badge> : <Badge type="rust">não publicado</Badge>}
                  </td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <BtnGhost>Detalhes</BtnGhost>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        <div>
          <SectionLabel>Detalhe DPO · Sabesp</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 24,
                backgroundColor: t.colors.navyMist,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: t.colors.navy, fontSize: 14, fontWeight: 500,
              }}>JC</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>Juliana Camargo</div>
                <div style={{ fontSize: 12, color: t.colors.stone }}>Encarregada de Dados · Sabesp</div>
              </div>
            </div>
            <DPORow label="E-mail oficial" value="dpo@sabesp.com.br" mono />
            <DPORow label="Telefone direto" value="+55 11 3388-9100" mono />
            <DPORow label="Designada em" value="15 ago 2024" mono />
            <DPORow label="Renovação" value="bianual · próxima 15 ago 2026" />
            <DPORow label="Vínculo institucional" value="Diretoria Jurídica e Compliance" />
            <DPORow label="Responsabilidades" value="Atendimento a titulares · ROPA · DPIA · Comunicação ANPD" last />
          </div>
        </div>

        <div>
          <SectionLabel>Base legal por categoria de dado</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
            <BaseLegalRow categoria="Dados de operadores e técnicos" base="Execução de contrato · art. 7º V" qtd="164 titulares" />
            <BaseLegalRow categoria="Dados de assinatura digital ICP-Brasil" base="Obrigação legal · art. 7º II" qtd="23 titulares" />
            <BaseLegalRow categoria="Dados de DPO" base="Obrigação legal · art. 41" qtd="4 titulares" />
            <BaseLegalRow categoria="Logs de auditoria" base="Legítimo interesse · art. 7º IX" qtd="2.4M registros/mês" />
            <BaseLegalRow categoria="Dados de fornecedores e parceiros" base="Execução de contrato · art. 7º V" qtd="47 titulares" last />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Ações de privacidade da operadora</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <ActionCard
              titulo="Política publicada"
              valor="vigente desde"
              detalhe="01 jul 2024"
              link="sabesp.com.br/privacidade"
            />
            <ActionCard
              titulo="Treinamento LGPD"
              valor="cobertura"
              detalhe="2.847 colaboradores · 94%"
              link="próxima rodada 30 jun 2026"
            />
            <ActionCard
              titulo="DPIAs realizadas"
              valor="categorias avaliadas"
              detalhe="2 alto risco · 3 médio"
              link="próxima revisão 31 jul 2026"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SubTab({ label, count, active, attention }) {
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
          backgroundColor: attention ? t.colors.rustMist : t.colors.bone,
          color: attention ? t.colors.rust : t.colors.stone,
          borderRadius: 8,
          fontFamily: t.font.mono,
        }}>{count}</span>
      )}
    </div>
  );
}

function DPORow({ label, value, mono, last }) {
  return (
    <div style={{
      padding: '8px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <span style={{ fontSize: 12, color: t.colors.slate }}>{label}</span>
      <span style={{
        fontSize: 12,
        color: t.colors.ink,
        fontFamily: mono ? t.font.mono : t.font.sans,
        fontWeight: mono ? 500 : 400,
        textAlign: 'right',
      }}>{value}</span>
    </div>
  );
}

function BaseLegalRow({ categoria, base, qtd, last }) {
  return (
    <div style={{
      padding: '12px 16px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 12, fontWeight: 500 }}>{categoria}</span>
        <span style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.navy }}>{qtd}</span>
      </div>
      <div style={{ fontSize: 11, color: t.colors.stone, fontStyle: 'italic' }}>{base}</div>
    </div>
  );
}

function ActionCard({ titulo, valor, detalhe, link }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate, marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{titulo}</div>
      <div style={{ fontSize: 11, color: t.colors.slate, marginBottom: 4 }}>{valor}</div>
      <div style={{ fontSize: 16, color: t.colors.ink, marginBottom: 8 }}>{detalhe}</div>
      <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.navy }}>{link}</div>
    </div>
  );
}
