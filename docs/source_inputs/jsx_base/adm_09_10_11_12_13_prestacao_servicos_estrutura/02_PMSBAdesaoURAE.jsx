import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function PMSBAdesaoURAE() {
  const pmsbs = [
    { municipio: 'São Paulo', codIbge: '3550308', vigente: 'sim', desde: '15 mar 2022', validade: '15 mar 2032', proxRevisao: '15 mar 2026', revisao4anos: 'em curso' },
    { municipio: 'Santo André', codIbge: '3548708', vigente: 'sim', desde: '20 ago 2021', validade: '20 ago 2031', proxRevisao: '20 ago 2025 (atrasada)', revisao4anos: 'pendente' },
    { municipio: 'Barueri', codIbge: '3506003', vigente: 'sim', desde: '10 jan 2023', validade: '10 jan 2033', proxRevisao: '10 jan 2027', revisao4anos: '—' },
    { municipio: 'Campinas', codIbge: '3509502', vigente: 'sim', desde: '05 jun 2022', validade: '05 jun 2032', proxRevisao: '05 jun 2026', revisao4anos: 'agendada' },
    { municipio: 'Santos', codIbge: '3548906', vigente: 'em revisão', desde: '12 abr 2014', validade: '12 abr 2024', proxRevisao: 'vencida', revisao4anos: 'crítico' },
    { municipio: 'Sorocaba', codIbge: '3552205', vigente: 'sim', desde: '03 fev 2023', validade: '03 fev 2033', proxRevisao: '03 fev 2027', revisao4anos: '—' },
    { municipio: 'Natal', codIbge: '2408102', vigente: 'vencido', desde: '15 set 2014', validade: '15 set 2024', proxRevisao: 'vencida', revisao4anos: 'crítico' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Municípios', 'PMSB & adesão URAE']}
        title="PMSB & adesão URAE"
        lead="Plano Municipal de Saneamento Básico conforme Lei 11.445/2007 e adesão a Unidades Regionais de Saneamento Básico (URAE) conforme Lei 14.026/2020 e LCs estaduais."
        actions={<>
          <BtnSecondary>Notificar municípios em pendência</BtnSecondary>
          <BtnPrimary>Atualizar PMSB</BtnPrimary>
        </>}
      />

      <CalloutBlock tone="warn" title="2 PMSBs com pendência crítica">
        Santos (vence 12 abr 2024 · em revisão prolongada) e Natal (vencido em 15 set 2024 · sem ato de prorrogação). Operação dos serviços nesses municípios fica condicionada a regularização conforme art. 9º da Lei 14.026/2020.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="PMSBs vigentes" value="6/9" hint="2 vencidos · 1 em revisão" />
        <Metric label="Em URAE" value="6" hint="todas em SP" />
        <Metric label="Universalização" value="2029-2033" hint="metas por município" />
        <Metric label="Próxima revisão 4 anos" value="3 vencidas" hint="art. 19 §4º" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de municípios" />
        <SubTab label="PMSB & adesão URAE" active />
        <SubTab label="Tarifa Social & Fundo Municipal" />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="Lei 11.445/2007 · Lei 14.026/2020">Status do PMSB por município</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Município</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
                <th style={thStyle()}>Aprovação</th>
                <th style={thStyle()}>Validade</th>
                <th style={thStyle()}>Próx. revisão (10 anos)</th>
                <th style={thStyle({ textAlign: 'center' })}>Revisão 4 anos</th>
              </tr>
            </thead>
            <tbody>
              {pmsbs.map((p, i) => (
                <tr key={p.codIbge} style={{ borderBottom: i < pmsbs.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 13 })}>
                    <div>{p.municipio}</div>
                    <div style={{ fontSize: 10, fontFamily: t.font.mono, color: t.colors.slate }}>{p.codIbge}</div>
                  </td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {p.vigente === 'sim' && <Badge type="forest">vigente</Badge>}
                    {p.vigente === 'em revisão' && <Badge type="ember">em revisão</Badge>}
                    {p.vigente === 'vencido' && <Badge type="rust">vencido</Badge>}
                  </td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{p.desde}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{p.validade}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: p.proxRevisao === 'vencida' ? t.colors.rust : t.colors.stone })}>{p.proxRevisao}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {p.revisao4anos === 'em curso' && <Badge type="navy">em curso</Badge>}
                    {p.revisao4anos === 'agendada' && <Badge type="navy">agendada</Badge>}
                    {p.revisao4anos === 'pendente' && <Badge type="ember">pendente</Badge>}
                    {p.revisao4anos === 'crítico' && <Badge type="rust">crítico</Badge>}
                    {p.revisao4anos === '—' && <span style={{ fontSize: 11, color: t.colors.mist }}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="bloco regional · Lei 14.026/2020">Adesão a URAE</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <UraeDetalhe
              codigo="URAE-1"
              titulo="Capital, Litoral e Norte de SP"
              base="LC 1.413/2024 art. 2º"
              municipios={['São Paulo', 'Santo André', 'Barueri', 'Santos', '+ outros municípios']}
              operadoraResp="Sabesp"
              meta="universalização 2029"
              status="ativa"
            />
            <UraeDetalhe
              codigo="URAE-2"
              titulo="Vale do Paraíba e Interior Norte"
              base="LC 1.413/2024 art. 2º"
              municipios={['Campinas', 'Sorocaba', '+ municípios da região']}
              operadoraResp="Sabesp + SAAE Campinas"
              meta="universalização 2033"
              status="ativa"
            />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Metas de universalização por município</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
          <MetaRow municipio="São Paulo" agua="99% (2025)" esgoto="92% (2025)" metaAgua="100% (2029)" metaEsgoto="98% (2029)" />
          <MetaRow municipio="Santo André" agua="99% (2025)" esgoto="89% (2025)" metaAgua="100% (2029)" metaEsgoto="95% (2029)" />
          <MetaRow municipio="Campinas" agua="99% (2025)" esgoto="91% (2025)" metaAgua="100% (2033)" metaEsgoto="98% (2033)" />
          <MetaRow municipio="Sorocaba" agua="98% (2025)" esgoto="85% (2025)" metaAgua="100% (2033)" metaEsgoto="95% (2033)" />
          <MetaRow municipio="Natal" agua="92% (2025)" esgoto="62% (2025)" metaAgua="99% (2033)" metaEsgoto="90% (2033)" last />
        </div>
      </div>
    </div>
  );
}

function SubTab({ label, active }) {
  return (
    <div style={{
      padding: '12px 18px',
      fontSize: 13,
      fontWeight: active ? 500 : 400,
      color: active ? t.colors.ink : t.colors.stone,
      borderBottom: active ? `2px solid ${t.colors.navy}` : '2px solid transparent',
      cursor: 'pointer',
      marginBottom: -1,
    }}>{label}</div>
  );
}

function UraeDetalhe({ codigo, titulo, base, municipios, operadoraResp, meta, status }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <span style={{
          fontFamily: t.font.mono,
          fontSize: 14,
          fontWeight: 500,
          color: t.colors.navy,
          padding: '4px 10px',
          backgroundColor: t.colors.navyMist,
          border: `1px solid ${t.colors.navy}`,
          borderRadius: 2,
        }}>{codigo}</span>
        <Badge type="forest">{status}</Badge>
      </div>
      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{titulo}</div>
      <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate, marginBottom: 12 }}>{base}</div>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 10, color: t.colors.slate, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Municípios no escopo</div>
        <div style={{ fontSize: 12, color: t.colors.stone }}>{municipios.join(' · ')}</div>
      </div>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 10, color: t.colors.slate, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Operadora responsável</div>
        <div style={{ fontSize: 12, color: t.colors.ink, fontWeight: 500 }}>{operadoraResp}</div>
      </div>
      <div>
        <div style={{ fontSize: 10, color: t.colors.slate, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Meta universalização</div>
        <div style={{ fontSize: 12, color: t.colors.ink }}>{meta}</div>
      </div>
    </div>
  );
}

function MetaRow({ municipio, agua, esgoto, metaAgua, metaEsgoto, last }) {
  return (
    <div style={{
      padding: '14px 16px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'grid',
      gridTemplateColumns: '180px 1fr 1fr 1fr 1fr',
      gap: 12,
      alignItems: 'center',
    }}>
      <span style={{ fontSize: 13, fontWeight: 500 }}>{municipio}</span>
      <div>
        <div style={{ fontSize: 10, color: t.colors.slate }}>água atual</div>
        <div style={{ fontSize: 12, fontFamily: t.font.mono }}>{agua}</div>
      </div>
      <div>
        <div style={{ fontSize: 10, color: t.colors.slate }}>esgoto atual</div>
        <div style={{ fontSize: 12, fontFamily: t.font.mono }}>{esgoto}</div>
      </div>
      <div>
        <div style={{ fontSize: 10, color: t.colors.slate }}>meta água</div>
        <div style={{ fontSize: 12, fontFamily: t.font.mono, color: t.colors.forest, fontWeight: 500 }}>{metaAgua}</div>
      </div>
      <div>
        <div style={{ fontSize: 10, color: t.colors.slate }}>meta esgoto</div>
        <div style={{ fontSize: 12, fontFamily: t.font.mono, color: t.colors.forest, fontWeight: 500 }}>{metaEsgoto}</div>
      </div>
    </div>
  );
}
