import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function TemplatesAguas() {
  const templates = [
    {
      id: 'eta_convencional',
      nome: 'ETA convencional',
      versao: 'v3.2',
      etapas: 9,
      adocao: 38,
      desc: 'Sequência clássica: pré-oxidação → coagulação → floculação → decantação → filtração → ajuste pH → fluoretação → desinfecção',
      uso: 'Mananciais com turbidez bruta moderada a alta',
      atualizado: '15 mar 2026',
    },
    {
      id: 'eta_filtracao_direta',
      nome: 'Filtração direta',
      versao: 'v2.8',
      etapas: 7,
      adocao: 6,
      desc: 'Sem decantação separada: pré-oxidação → coagulação → filtração → ajuste pH → fluoretação → desinfecção',
      uso: 'Mananciais com baixa turbidez bruta (≤ 10 NTU média anual)',
      atualizado: '02 fev 2026',
    },
    {
      id: 'eta_dupla_filtracao',
      nome: 'Dupla filtração',
      versao: 'v2.4',
      etapas: 8,
      adocao: 3,
      desc: 'Sem floculação/decantação: pré-oxidação → coagulação → filtração ascendente → filtração rápida → ajuste pH → fluoretação → desinfecção',
      uso: 'Mananciais com turbidez bruta baixa a moderada e MOM elevada',
      atualizado: '10 jan 2026',
    },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Templates regulatórios', 'Templates Águas']}
        title="Templates regulatórios"
        lead="Moldes versionados de configuração de planta. Cada template define a sequência de etapas, parâmetros típicos, controle de qualidade e referências normativas aplicáveis."
        actions={<>
          <BtnSecondary>Comparar templates</BtnSecondary>
          <BtnPrimary>Novo template</BtnPrimary>
        </>}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${t.colors.bone}` }}>
        <DomainPill domain="aguas" />
        <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>·</span>
        <span style={{ fontSize: 12, color: t.colors.stone }}>Apenas templates Águas · templates Efluentes vivem em Admin Efluentes</span>
        <div style={{ marginLeft: 'auto' }}>
          <CrossAdminLink to="efluentes" />
        </div>
      </div>

      <CalloutBlock tone="info" title="Visibilidade per-diretoria">
        Esta página exibe apenas templates do domínio Águas (ETA convencional, filtração direta, dupla filtração). Templates de tratamento de efluentes (lodos ativados, UASB, lagoas, filtros biológicos) vivem na instância Admin Efluentes, governada pela diretoria de efluentes. As duas instâncias compartilham apenas Operadora, Município e URAE como entidades transversais.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Templates Águas" value="3" hint="convencional · direta · dupla" />
        <Metric label="Plantas declaradas" value="47" hint="100% usam template" />
        <Metric label="Adoção majoritária" value="ETA conv." hint="38 das 47 plantas (81%)" />
        <Metric label="Última revisão" value="15 mar 2026" hint="ETA convencional v3.2" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Templates Águas" active count={3} />
        <SubTab label="Detalhe & customizações" />
        <SubTab label="Histórico de versões" />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="3 templates ativos">Templates disponíveis</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {templates.map(tpl => (
            <TemplateCard key={tpl.id} template={tpl} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="estatísticas de adoção · 47 plantas">Adoção por template</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Template</th>
                <th style={thStyle({ textAlign: 'right' })}>Plantas</th>
                <th style={thStyle({ textAlign: 'right' })}>%</th>
                <th style={thStyle()}>Operadoras principais</th>
                <th style={thStyle()}>Casos típicos</th>
              </tr>
            </thead>
            <tbody>
              <AdocaoRow template="ETA convencional" plantas={38} pct={81} operadoras="Sabesp · CAERN · BRK" casos="Cantareira · Alto Tietê · Guarapiranga · Rio Claro · maioria" />
              <AdocaoRow template="Filtração direta" plantas={6} pct={13} operadoras="Sabesp · SAAE Campinas" casos="Mananciais com turbidez bruta baixa" />
              <AdocaoRow template="Dupla filtração" plantas={3} pct={6} operadoras="CAERN · BRK Ambiental" casos="Aquíferos com matéria orgânica · ETA Jiquí" last />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SubTab({ label, active, count }) {
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
          backgroundColor: t.colors.bone,
          color: t.colors.stone,
          borderRadius: 8,
          fontFamily: t.font.mono,
        }}>{count}</span>
      )}
    </div>
  );
}

function TemplateCard({ template }) {
  return (
    <div style={{
      backgroundColor: t.colors.pure,
      border: `1px solid ${t.colors.bone}`,
      padding: 20,
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate }}>{template.id}</span>
        <span style={{ fontFamily: t.font.mono, fontSize: 12, color: t.colors.navy, fontWeight: 500 }}>{template.versao}</span>
      </div>
      <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>{template.nome}</div>
      <div style={{ fontSize: 12, color: t.colors.stone, lineHeight: 1.5, marginBottom: 16 }}>{template.desc}</div>
      <div style={{ paddingTop: 12, borderTop: `1px solid ${t.colors.bone}`, marginBottom: 12 }}>
        <div style={{ fontSize: 10, color: t.colors.slate, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Uso recomendado</div>
        <div style={{ fontSize: 12, color: t.colors.ink }}>{template.uso}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, paddingTop: 12, borderTop: `1px solid ${t.colors.bone}` }}>
        <div>
          <div style={{ fontSize: 10, color: t.colors.slate, marginBottom: 2 }}>Etapas</div>
          <div style={{ fontFamily: t.font.mono, fontSize: 14, fontWeight: 500 }}>{template.etapas}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, color: t.colors.slate, marginBottom: 2 }}>Adoção</div>
          <div style={{ fontFamily: t.font.mono, fontSize: 14, fontWeight: 500 }}>{template.adocao} plantas</div>
        </div>
      </div>
      <div style={{ marginTop: 12, fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate }}>
        Atualizado em {template.atualizado}
      </div>
    </div>
  );
}

function AdocaoRow({ template, plantas, pct, operadoras, casos, last }) {
  return (
    <tr style={{ borderBottom: last ? 'none' : `1px solid ${t.colors.bone}` }}>
      <td style={tdStyle({ fontWeight: 500, fontSize: 13 })}>{template}</td>
      <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, fontWeight: 500 })}>{plantas}</td>
      <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{pct}%</td>
      <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{operadoras}</td>
      <td style={tdStyle({ fontSize: 11, color: t.colors.slate, fontStyle: 'italic' })}>{casos}</td>
    </tr>
  );
}
