import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function RegrasIntegridade() {
  const regras = [
    { code: 'R1', regra: 'Toda ETA exige ≥ 1 manancial e ≥ 1 trem com status válido', sev: 'bloqueante', escopo: 'PlantRegistration', impl: 'Specification', violacoes: 0 },
    { code: 'R2', regra: 'Todo ativo respeita REGRAS_HIERARQUIA dos pais aceitos', sev: 'bloqueante', escopo: 'Topology BC', impl: 'Specification', violacoes: 0 },
    { code: 'R3', regra: 'Toda BombaDosadora exige tabela_calibracao com ≥ 3 pontos', sev: 'bloqueante', escopo: '#04 Ativos', impl: 'Specification', violacoes: 2 },
    { code: 'R4', regra: 'Todo Insumo exige msds_doc_id anexado', sev: 'bloqueante', escopo: '#04 Ativos', impl: 'Specification', violacoes: 0 },
    { code: 'R5', regra: 'ETA com ClO2 exige TIPO_GERACAO_OXIDANTE_IN_LOCO ≠ nao_aplicavel', sev: 'obrigatoria', escopo: 'PlantRegistration', impl: 'Specification', violacoes: 0 },
    { code: 'R6', regra: 'Variável crítica não pode ter pct_missing > 30% em janela', sev: 'obrigatoria', escopo: 'Telemetry BC', impl: 'Specification', violacoes: 0 },
    { code: 'R7', regra: 'Tag SCADA aponta para catalogo_minimo_id OU variavel_especifica_id', sev: 'bloqueante', escopo: '#05 SCADA + #02', impl: 'Specification', violacoes: 0 },
    { code: 'R8', regra: 'Faixa observada cumpre min ≤ típica ≤ max', sev: 'bloqueante', escopo: '#02 Domínio', impl: 'Specification', violacoes: 0 },
    { code: 'R9', regra: 'Conflito entre fontes da Faixa observada gera alerta', sev: 'informativa', escopo: '#02 Domínio', impl: 'Specification', violacoes: 3 },
    { code: 'R10', regra: 'Insumo associado à etapa coerente com função química', sev: 'obrigatoria', escopo: '#04 Ativos', impl: 'Specification', violacoes: 0 },
    { code: 'R11', regra: 'Curva de performance exige ≥ 2 pontos cadastrados', sev: 'obrigatoria', escopo: '#04 Ativos', impl: 'Specification', violacoes: 0 },
    { code: 'R12', regra: 'Etapas ativas do trem ⊆ TREM_TRATAMENTO_ETAPAS catalogadas', sev: 'bloqueante', escopo: '#10 Plantas', impl: 'Specification', violacoes: 0 },
    { code: 'R13', regra: 'Perfis com escrita exigem 2FA habilitado', sev: 'obrigatoria', escopo: '#01 Plataforma', impl: 'Specification', violacoes: 0 },
    { code: 'R14', regra: 'Cliente-eta NÃO edita catálogo nem schemas do núcleo', sev: 'bloqueante', escopo: '#02 Domínio (escopo)', impl: 'Specification', violacoes: 0 },
  ];

  const violacoes = regras.reduce((acc, r) => acc + r.violacoes, 0);
  const bloqueantes = regras.filter(r => r.sev === 'bloqueante' && r.violacoes > 0).reduce((acc, r) => acc + r.violacoes, 0);

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão de domínio', 'Regras de integridade']}
        title="Regras de integridade"
        lead="14 regras cadastrais R1 a R14 implementadas via Specification Pattern. Avaliadas continuamente; violações bloqueantes impedem operação automática."
        actions={<>
          <BtnSecondary>Exportar relatório</BtnSecondary>
          <BtnPrimary>Re-avaliar agora</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Regras ativas" value="14" hint="R1 a R14" />
        <Metric label="Violações totais" value={String(violacoes)} hint={`${bloqueantes} bloqueantes`} />
        <Metric label="Plantas em conformidade" value="46/47" hint="ETA Campo Limpo com R3" />
        <Metric label="Última avaliação" value="48s atrás" delta="cadência 60s" deltaPositive />
      </div>

      {bloqueantes > 0 && (
        <CalloutBlock tone="error" title={`${bloqueantes} violações bloqueantes ativas`}>
          Operação automática suspensa para plantas em violação. Resolver pendências antes de habilitar modo Automático nos loops afetados.
        </CalloutBlock>
      )}

      <div style={{ height: 32 }} />

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="implementação Specification Pattern">Catálogo de regras</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>#</th>
                <th style={thStyle()}>Regra</th>
                <th style={thStyle({ textAlign: 'center' })}>Severidade</th>
                <th style={thStyle()}>Escopo</th>
                <th style={thStyle({ textAlign: 'right' })}>Violações</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
              </tr>
            </thead>
            <tbody>
              {regras.map((r, i) => (
                <tr key={r.code} style={{ borderBottom: i < regras.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, fontWeight: 500, color: t.colors.slate })}>{r.code}</td>
                  <td style={tdStyle({ fontSize: 12 })}>{r.regra}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {r.sev === 'bloqueante' && <Badge type="rust">bloqueante</Badge>}
                    {r.sev === 'obrigatoria' && <Badge type="ember">obrigatória</Badge>}
                    {r.sev === 'informativa' && <Badge type="navy">informativa</Badge>}
                  </td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{r.escopo}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, fontWeight: r.violacoes > 0 ? 500 : 400, color: r.violacoes > 0 ? (r.sev === 'bloqueante' ? t.colors.rust : t.colors.ember) : t.colors.slate })}>{r.violacoes}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {r.violacoes === 0
                      ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: t.colors.forest }}>
                          <span style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: t.colors.forest }} />conforme
                        </span>
                      : <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: r.sev === 'bloqueante' ? t.colors.rust : t.colors.ember }}>
                          <span style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: r.sev === 'bloqueante' ? t.colors.rust : t.colors.ember }} />em violação
                        </span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="Pendências ativas geradas pelo motor">Pendências geradas</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Regra</th>
                <th style={thStyle()}>Entidade</th>
                <th style={thStyle()}>Mensagem</th>
                <th style={thStyle()}>Ação sugerida</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: `1px solid ${t.colors.bone}` }}>
                <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, fontWeight: 500, color: t.colors.rust })}>R3</td>
                <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>BD-01 · ETA Campo Limpo</td>
                <td style={tdStyle({ fontSize: 12 })}>Bomba dosadora PAC 1 sem calibração in situ. Setpoint % não converte para mg/L.</td>
                <td style={tdStyle({ fontSize: 12, color: t.colors.stone, fontStyle: 'italic' })}>Realizar ensaio volumétrico em 5 pontos (10/25/50/75/100%)</td>
                <td style={tdStyle({ textAlign: 'right' })}><BtnGhost>Ir para BD-01</BtnGhost></td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${t.colors.bone}` }}>
                <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, fontWeight: 500, color: t.colors.rust })}>R3</td>
                <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>BD-03 · ETA Campo Limpo</td>
                <td style={tdStyle({ fontSize: 12 })}>Bomba dosadora cloro pré sem calibração in situ.</td>
                <td style={tdStyle({ fontSize: 12, color: t.colors.stone, fontStyle: 'italic' })}>Ensaio volumétrico</td>
                <td style={tdStyle({ textAlign: 'right' })}><BtnGhost>Ir para BD-03</BtnGhost></td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${t.colors.bone}` }}>
                <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, fontWeight: 500, color: t.colors.navy })}>R9</td>
                <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>turb_bruta · faixa</td>
                <td style={tdStyle({ fontSize: 12 })}>Conflito de faixa observada entre SCADA principal e telemetria pública.</td>
                <td style={tdStyle({ fontSize: 12, color: t.colors.stone, fontStyle: 'italic' })}>Revisar e harmonizar fontes</td>
                <td style={tdStyle({ textAlign: 'right' })}><BtnGhost>Revisar</BtnGhost></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
