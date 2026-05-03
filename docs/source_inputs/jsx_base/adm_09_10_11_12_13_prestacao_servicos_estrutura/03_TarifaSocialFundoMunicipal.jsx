import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function TarifaSocialFundoMunicipal() {
  const tarifas = [
    { municipio: 'São Paulo', criterios: 'CadÚnico até 1/2 SM', desconto: '50% até 10m³', beneficiarios: '485.214', vigente: 'sim', publicada: 'sim', fonte: 'Lei 14.898/2024' },
    { municipio: 'Santo André', criterios: 'CadÚnico até 1/2 SM', desconto: '50% até 15m³', beneficiarios: '38.940', vigente: 'sim', publicada: 'sim', fonte: 'Lei 14.898/2024' },
    { municipio: 'Barueri', criterios: 'CadÚnico até 1/2 SM', desconto: '50% até 10m³', beneficiarios: '12.840', vigente: 'sim', publicada: 'sim', fonte: 'Lei 14.898/2024' },
    { municipio: 'Campinas', criterios: 'CadÚnico até 1/2 SM', desconto: '40% até 10m³', beneficiarios: '67.118', vigente: 'sim', publicada: 'sim', fonte: 'Lei 14.898/2024' },
    { municipio: 'Santos', criterios: 'CadÚnico até 1/2 SM', desconto: '50% até 10m³', beneficiarios: '21.430', vigente: 'sim', publicada: 'sim', fonte: 'Lei 14.898/2024' },
    { municipio: 'Sorocaba', criterios: 'CadÚnico até 1/2 SM', desconto: '50% até 10m³', beneficiarios: '32.870', vigente: 'sim', publicada: 'sim', fonte: 'Lei 14.898/2024' },
    { municipio: 'Campo Grande', criterios: 'CadÚnico até 1/2 SM', desconto: '50% até 10m³', beneficiarios: '52.740', vigente: 'sim', publicada: 'sim', fonte: 'Lei 14.898/2024' },
    { municipio: 'Goiânia', criterios: 'CadÚnico até 1/2 SM', desconto: '50% até 10m³', beneficiarios: '78.910', vigente: 'sim', publicada: 'sim', fonte: 'Lei 14.898/2024' },
    { municipio: 'Natal', criterios: 'apenas CadÚnico extr. pobreza', desconto: '40% até 10m³', beneficiarios: '24.180', vigente: 'parcial', publicada: 'sim', fonte: 'Lei municipal · ajuste pendente Lei 14.898/2024' },
  ];

  const fundos = [
    { municipio: 'São Paulo', criado: 'sim', lei: 'LM 17.142/2019', saldo: 'R$ 142.4M', utilizacao: '87%', destinacao: 'PMSB · subsídio cruzado' },
    { municipio: 'Santo André', criado: 'sim', lei: 'LM 9.840/2018', saldo: 'R$ 8.7M', utilizacao: '74%', destinacao: 'PMSB · ampliação coleta' },
    { municipio: 'Barueri', criado: 'sim', lei: 'LM 2.341/2020', saldo: 'R$ 4.2M', utilizacao: '92%', destinacao: 'PMSB' },
    { municipio: 'Campinas', criado: 'sim', lei: 'LM 14.872/2018', saldo: 'R$ 18.9M', utilizacao: '68%', destinacao: 'PMSB · educação ambiental' },
    { municipio: 'Santos', criado: 'sim', lei: 'LM 3.412/2020', saldo: 'R$ 6.4M', utilizacao: '82%', destinacao: 'PMSB' },
    { municipio: 'Sorocaba', criado: 'sim', lei: 'LM 11.842/2019', saldo: 'R$ 7.8M', utilizacao: '79%', destinacao: 'PMSB' },
    { municipio: 'Campo Grande', criado: 'sim', lei: 'LM 6.318/2020', saldo: 'R$ 11.2M', utilizacao: '71%', destinacao: 'PMSB · expansão rede' },
    { municipio: 'Goiânia', criado: 'sim', lei: 'LM 9.180/2018', saldo: 'R$ 14.6M', utilizacao: '83%', destinacao: 'PMSB · ETE Goiânia' },
    { municipio: 'Natal', criado: 'não', lei: '—', saldo: '—', utilizacao: '—', destinacao: '—' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Municípios', 'Tarifa Social & Fundo Municipal']}
        title="Tarifa Social & Fundo Municipal"
        lead="Tarifa Social conforme Lei 14.898/2024 e Fundo Municipal de Saneamento conforme Deliberação ARSESP 1.545/2024 e leis municipais correlatas."
        actions={<>
          <BtnSecondary>Exportar relatório</BtnSecondary>
          <BtnPrimary>Atualizar critérios</BtnPrimary>
        </>}
      />

      <CalloutBlock tone="info" title="Lei 14.898/2024 · Tarifa Social Federal">
        Estabelece critérios mínimos uniformes para concessão de tarifa social aos beneficiários do CadÚnico até 1/2 salário mínimo per capita, com desconto mínimo de 50% e cobertura mínima de 10m³ mensais. Adesão obrigatória pelos municípios titulares.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Tarifas vigentes" value="8/9" hint="Natal em parcial" />
        <Metric label="Beneficiários totais" value="814.252" hint="domicílios em CadÚnico" />
        <Metric label="Fundos municipais" value="8/9" hint="Natal sem fundo" />
        <Metric label="Volume em fundos" value="R$ 214.2M" hint="utilização média 79.5%" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de municípios" />
        <SubTab label="PMSB & adesão URAE" />
        <SubTab label="Tarifa Social & Fundo Municipal" active />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="Lei 14.898/2024 · municipalidades">Tarifas sociais</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Município</th>
                <th style={thStyle()}>Critérios</th>
                <th style={thStyle()}>Desconto</th>
                <th style={thStyle({ textAlign: 'right' })}>Beneficiários</th>
                <th style={thStyle({ textAlign: 'center' })}>Vigência</th>
                <th style={thStyle()}>Fundamento legal</th>
              </tr>
            </thead>
            <tbody>
              {tarifas.map((tar, i) => (
                <tr key={i} style={{ borderBottom: i < tarifas.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{tar.municipio}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{tar.criterios}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12 })}>{tar.desconto}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{tar.beneficiarios}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {tar.vigente === 'sim' && <Badge type="forest">vigente</Badge>}
                    {tar.vigente === 'parcial' && <Badge type="ember">parcial</Badge>}
                  </td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone, fontStyle: 'italic' })}>{tar.fonte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="Deliberação ARSESP 1.545/2024 · LM correlatas">Fundos Municipais de Saneamento</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Município</th>
                <th style={thStyle({ textAlign: 'center' })}>Criado</th>
                <th style={thStyle()}>Lei municipal</th>
                <th style={thStyle({ textAlign: 'right' })}>Saldo atual</th>
                <th style={thStyle({ textAlign: 'right' })}>Utilização</th>
                <th style={thStyle()}>Destinação principal</th>
              </tr>
            </thead>
            <tbody>
              {fundos.map((f, i) => (
                <tr key={i} style={{ borderBottom: i < fundos.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{f.municipio}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {f.criado === 'sim' ? <Badge type="forest">sim</Badge> : <Badge type="rust">não</Badge>}
                  </td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{f.lei}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, fontWeight: 500 })}>{f.saldo}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{f.utilizacao}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{f.destinacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Pendências</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
          <PendenciaRow municipio="Natal" assunto="Tarifa social não aderente à Lei 14.898/2024" desc="Critério atual restrito a CadÚnico em extrema pobreza · desconto 40%. Adequação obrigatória." prazo="vencimento 31 dez 2026" />
          <PendenciaRow municipio="Natal" assunto="Fundo Municipal de Saneamento inexistente" desc="Lei municipal não criou o fundo · Deliberação ARSESP 1.545/2024 art. 4º exige criação." prazo="prazo regulatório" last />
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

function PendenciaRow({ municipio, assunto, desc, prazo, last }) {
  return (
    <div style={{
      padding: '14px 16px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
    }}>
      <span style={{
        width: 8, height: 8, borderRadius: 4,
        backgroundColor: t.colors.rust,
        marginTop: 6,
        flexShrink: 0,
      }} />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 12, fontWeight: 500 }}>{municipio} · {assunto}</span>
          <span style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.rust }}>{prazo}</span>
        </div>
        <div style={{ fontSize: 12, color: t.colors.stone }}>{desc}</div>
      </div>
    </div>
  );
}
