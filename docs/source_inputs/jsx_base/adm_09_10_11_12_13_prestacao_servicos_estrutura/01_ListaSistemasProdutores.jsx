import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function ListaSistemasProdutores() {
  const sistemas = [
    { id: 'sis_cant', nome: 'Sistema Cantareira', tipo: 'integrado_metropolitano', vazaoTipica: '33.000 L/s', mananciais: 5, plantas: 'Guaraú · Itapanhaú', status: 'operacional', operadora: 'Sabesp' },
    { id: 'sis_alto_tiete', nome: 'Sistema Alto Tietê', tipo: 'integrado_metropolitano', vazaoTipica: '14.500 L/s', mananciais: 4, plantas: 'Taiaçupeba', status: 'operacional', operadora: 'Sabesp' },
    { id: 'sis_guarapiranga', nome: 'Sistema Guarapiranga', tipo: 'reservatorio', vazaoTipica: '14.800 L/s', mananciais: 1, plantas: 'ABV · Guarapiranga', status: 'operacional', operadora: 'Sabesp' },
    { id: 'sis_rio_claro', nome: 'Sistema Rio Claro', tipo: 'rio', vazaoTipica: '4.000 L/s', mananciais: 1, plantas: 'Casa Grande', status: 'operacional', operadora: 'Sabesp' },
    { id: 'sis_rio_grande', nome: 'Sistema Rio Grande', tipo: 'reservatorio', vazaoTipica: '5.500 L/s', mananciais: 1, plantas: 'Rio Grande', status: 'operacional', operadora: 'Sabesp' },
    { id: 'sis_alto_cotia', nome: 'Sistema Alto Cotia', tipo: 'reservatorio', vazaoTipica: '1.300 L/s', mananciais: 2, plantas: 'Morro Grande', status: 'operacional', operadora: 'Sabesp' },
    { id: 'sis_baixo_cotia', nome: 'Sistema Baixo Cotia', tipo: 'rio', vazaoTipica: '900 L/s', mananciais: 1, plantas: 'ABV Cotia', status: 'operacional', operadora: 'Sabesp' },
    { id: 'sis_paiva_castro', nome: 'Sistema Paiva Castro', tipo: 'reservatorio_transferencia', vazaoTipica: '~2.000 L/s', mananciais: 1, plantas: 'Campo Limpo (recepção)', status: 'previsto', operadora: 'Sabesp', previstoEm: 'Jan/2027' },
  ];

  const mananciais = [
    { nome: 'Reservatório Jaguari-Jacareí', sistema: 'Cantareira', tipo: 'reservatório', volumeUtil: '1.063 hm³', situacao: '85% · normal', outorga: 'OUT-2024-0837/SP' },
    { nome: 'Reservatório Cachoeira', sistema: 'Cantareira', tipo: 'reservatório', volumeUtil: '95 hm³', situacao: '78% · normal', outorga: 'OUT-2024-0837/SP' },
    { nome: 'Reservatório Atibainha', sistema: 'Cantareira', tipo: 'reservatório', volumeUtil: '215 hm³', situacao: '82% · normal', outorga: 'OUT-2024-0837/SP' },
    { nome: 'Reservatório Paiva Castro', sistema: 'Paiva Castro', tipo: 'reservatório de transferência', volumeUtil: '32 hm³', situacao: 'em comissionamento', outorga: 'OUT-2026-0102/SP (provisional)' },
    { nome: 'Represa Taiaçupeba', sistema: 'Alto Tietê', tipo: 'reservatório', volumeUtil: '79 hm³', situacao: '74% · normal', outorga: 'OUT-2024-0204/SP' },
    { nome: 'Represa Guarapiranga', sistema: 'Guarapiranga', tipo: 'reservatório', volumeUtil: '194 hm³', situacao: '88% · normal', outorga: 'OUT-2024-0156/SP' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Sistemas produtores', 'Lista de sistemas']}
        title="Sistemas produtores"
        lead="Arranjos físicos de captação. Manancial é aggregate de primeira classe com química característica, vazão típica e comitê de bacia. Status previsto suportado para sistemas em comissionamento."
        actions={<>
          <BtnSecondary>Mapa de mananciais</BtnSecondary>
          <BtnPrimary>Novo sistema</BtnPrimary>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Sistemas operacionais" value="7" hint="todos da Sabesp" />
        <Metric label="Em comissionamento" value="1" delta="Paiva Castro · Jan/2027" deltaPositive />
        <Metric label="Mananciais cadastrados" value="15" hint="6 reservatórios principais" />
        <Metric label="Vazão típica total" value="76.000 L/s" hint="capacidade combinada" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de sistemas" active />
        <SubTab label="Estrutura física" />
        <SubTab label="Status & comissionamento" attention count={1} />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="8 cadastrados · 7 operacionais · 1 previsto">Sistemas produtores</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Sistema</th>
                <th style={thStyle()}>Tipo</th>
                <th style={thStyle({ textAlign: 'right' })}>Vazão típica</th>
                <th style={thStyle({ textAlign: 'right' })}>Mananciais</th>
                <th style={thStyle()}>Plantas atendidas</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
              </tr>
            </thead>
            <tbody>
              {sistemas.map((s, i) => (
                <tr key={s.id} style={{ borderBottom: i < sistemas.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{s.id}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 13 })}>{s.nome}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone, fontFamily: t.font.mono })}>{s.tipo}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{s.vazaoTipica}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{s.mananciais}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{s.plantas}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {s.status === 'operacional' && <Pill type="forest" filled>operacional</Pill>}
                    {s.status === 'previsto' && <Pill type="navy">previsto · {s.previstoEm}</Pill>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CalloutBlock tone="info" title="Paiva Castro entra em Jan/2027">
        Sistema de transferência Cantareira-Paiva Castro está em comissionamento. Aggregate cadastrado com status "previsto" e visível na plataforma como sistema futuro. Outorga DAEE-SP em fase provisional (OUT-2026-0102/SP). Mistura de águas brutas Cantareira + Paiva Castro afetará química na captação da ETA Campo Limpo, exigindo nova versão de envelope de coagulação (ENV-CLP-COAG-v4.2 em aprovação).
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="aggregate first-class">Mananciais cadastrados</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Manancial</th>
                <th style={thStyle()}>Sistema</th>
                <th style={thStyle()}>Tipo</th>
                <th style={thStyle({ textAlign: 'right' })}>Volume útil</th>
                <th style={thStyle()}>Situação</th>
                <th style={thStyle()}>Outorga ANA/DAEE</th>
              </tr>
            </thead>
            <tbody>
              {mananciais.map((m, i) => (
                <tr key={i} style={{ borderBottom: i < mananciais.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{m.nome}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{m.sistema}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.slate, fontStyle: 'italic' })}>{m.tipo}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{m.volumeUtil}</td>
                  <td style={tdStyle({ fontSize: 12, color: m.situacao.includes('comissionamento') ? t.colors.ember : t.colors.stone })}>{m.situacao}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy })}>{m.outorga}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
