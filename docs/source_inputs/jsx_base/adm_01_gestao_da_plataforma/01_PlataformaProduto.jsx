import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function PlataformaProduto() {
  const flags = [
    { key: 'gemeo_digital_v2', scope: 'global', enabled: true, rollout: 100, owner: 'Diretoria de Águas', updated: '28 abr 2026', operadoras: 'Todas' },
    { key: 'sinisa_export_404', scope: 'fase 2', enabled: false, rollout: 0, owner: 'Equipe regulatória', updated: '15 abr 2026', operadoras: '—' },
    { key: 'ia_coagulacao_bayes', scope: 'planta', enabled: true, rollout: 60, owner: 'Núcleo Águas', updated: '02 mai 2026', operadoras: '4 plantas' },
    { key: 'distribuicao_fase3', scope: 'fase 3', enabled: false, rollout: 0, owner: 'Roadmap pós-2028', updated: '01 fev 2026', operadoras: '—' },
    { key: 'mistura_paiva_castro', scope: 'planta', enabled: true, rollout: 100, owner: 'ETA Campo Limpo', updated: '02 mai 2026', operadoras: '1 planta' },
    { key: 'arsesp_eletronico_lc1413', scope: 'operadora', enabled: true, rollout: 80, owner: 'Equipe regulatória', updated: '10 abr 2026', operadoras: 'Sabesp + 4' },
    { key: 'cognitive_assistant_beta', scope: 'global', enabled: false, rollout: 0, owner: 'P&D', updated: '20 mar 2026', operadoras: '—' },
  ];

  const jobs = [
    { name: 'sinisa_consolidate_monthly', schedule: '0 2 1 * *', last: '01 mai 2026 02:00', status: 'sucesso', duration: '12m 04s' },
    { name: 'audit_export_to_cold_storage', schedule: '0 3 * * 0', last: '28 abr 2026 03:00', status: 'sucesso', duration: '47m 22s' },
    { name: 'lgpd_retention_sweep', schedule: '0 4 1 * *', last: '01 mai 2026 04:00', status: 'sucesso', duration: '8m 51s' },
    { name: 'norma_888_diff_check', schedule: '0 6 * * *', last: '02 mai 2026 06:00', status: 'sucesso', duration: '00m 18s' },
    { name: 'bandeira_tarifaria_alert', schedule: '0 9 28 * *', last: '28 abr 2026 09:00', status: 'sucesso', duration: '00m 02s' },
    { name: 'titularidade_calc_monthly', schedule: '0 5 2 * *', last: '02 mai 2026 05:00', status: 'falha', duration: '02m 13s' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão da plataforma', 'Plataforma como produto']}
        title="Plataforma como produto"
        lead="Feature flags com escopo, jobs agendados, vault de credenciais, política de retenção legal e workspace de operações em lote. Ajustes que afetam a TITAN inteira."
        actions={<>
          <BtnSecondary>Exportar configuração</BtnSecondary>
          <BtnPrimary>Nova feature flag</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Feature flags ativas" value="14" hint="de 23 cadastradas" />
        <Metric label="Jobs em execução" value="6" hint="próximo às 06:00" />
        <Metric label="Operações em lote pendentes" value="2" hint="aguardando aprovação" />
        <Metric label="Saúde dos núcleos" value="100%" delta="Águas + Efluentes ok" deltaPositive />
      </div>

      <div style={{ marginBottom: 40 }}>
        <SectionLabel hint="14 ativas · 9 desabilitadas">Feature flags</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Chave</th>
                <th style={thStyle()}>Escopo</th>
                <th style={thStyle({ textAlign: 'center' })}>Estado</th>
                <th style={thStyle({ textAlign: 'right' })}>Rollout</th>
                <th style={thStyle()}>Aplicada a</th>
                <th style={thStyle()}>Owner</th>
                <th style={thStyle()}>Atualizada</th>
              </tr>
            </thead>
            <tbody>
              {flags.map((f, i) => (
                <tr key={f.key} style={{ borderBottom: i < flags.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, color: t.colors.ink })}>{f.key}</td>
                  <td style={tdStyle()}><Badge type="neutral">{f.scope}</Badge></td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {f.enabled
                      ? <Pill type="forest" filled>ativa</Pill>
                      : <Pill type="neutral">inativa</Pill>}
                  </td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{f.rollout}%</td>
                  <td style={tdStyle({ color: t.colors.stone, fontSize: 12 })}>{f.operadoras}</td>
                  <td style={tdStyle({ color: t.colors.stone, fontSize: 12 })}>{f.owner}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{f.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 32, marginBottom: 40 }}>
        <div>
          <SectionLabel hint="6 ativos">Jobs agendados</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                  <th style={thStyle()}>Job</th>
                  <th style={thStyle()}>Cron</th>
                  <th style={thStyle()}>Última execução</th>
                  <th style={thStyle({ textAlign: 'right' })}>Duração</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((j, i) => (
                  <tr key={j.name} style={{ borderBottom: i < jobs.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                    <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12 })}>{j.name}</td>
                    <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{j.schedule}</td>
                    <td style={tdStyle({ fontSize: 12 })}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{
                          width: 6, height: 6, borderRadius: 3,
                          backgroundColor: j.status === 'sucesso' ? t.colors.forest : t.colors.rust,
                        }} />
                        <span style={{ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone }}>{j.last}</span>
                      </div>
                    </td>
                    <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{j.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <SectionLabel>Operações em lote</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 16 }}>
            <CalloutBlock tone="warn" title="2 propostas aguardando aprovação">
              Aplicar pacote regulatório v3.2 a 12 plantas — proposta por Marina Costa, aguarda segundo aprovador.
            </CalloutBlock>
            <div style={{ marginTop: 16 }}>
              <BtnPrimary>Ver fila de aprovações</BtnPrimary>
            </div>
            <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${t.colors.bone}` }}>
              <div style={{ fontSize: 11, color: t.colors.slate, marginBottom: 12, fontFamily: t.font.mono, letterSpacing: '0.06em', textTransform: 'uppercase' }}>HISTÓRICO RECENTE</div>
              <div style={{ fontSize: 12, color: t.colors.stone, lineHeight: 1.7 }}>
                <div>• 28 abr · atualizar norma 888 v2024.3 — <span style={{ color: t.colors.forest }}>executado</span></div>
                <div>• 22 abr · ajustar demanda contratada Sabesp — <span style={{ color: t.colors.forest }}>executado</span></div>
                <div>• 18 abr · redefinir vínculo URAE-2 — <span style={{ color: t.colors.slate }}>revertido</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <SectionLabel>Política de retenção</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            <RetentionCard label="Regulatório" value="7 anos" base="Lei 14.026/2020" />
            <RetentionCard label="Eventos operacionais" value="5 anos" base="TR §6.10" />
            <RetentionCard label="Dados pessoais (LGPD)" value="por finalidade" base="Lei 13.709 art. 16" />
            <RetentionCard label="Telemetria raw" value="90 dias" base="depois agregado" />
          </div>
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${t.colors.bone}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 12, color: t.colors.stone }}>Exportação para frio: domingos às 03:00 · próxima 05 mai 2026</div>
            <BtnGhost>Editar política</BtnGhost>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <SectionLabel>Vault de credenciais</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <VaultStat label="Segredos armazenados" value="47" />
            <VaultStat label="Próxima rotação" value="ICP-Brasil A1 · 15 dias" />
            <VaultStat label="Acessos no mês" value="312" />
          </div>
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${t.colors.bone}`, display: 'flex', justifyContent: 'space-between' }}>
            <BtnGhost>Ver registros de acesso</BtnGhost>
            <BtnGhost>Configurar política de rotação</BtnGhost>
          </div>
        </div>
      </div>
    </div>
  );
}

function RetentionCard({ label, value, base }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: t.colors.slate, fontWeight: 500, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 500, color: t.colors.ink, marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate }}>{base}</div>
    </div>
  );
}

function VaultStat({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: t.colors.slate, fontWeight: 500, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
      <div style={{ fontSize: 16, color: t.colors.ink }}>{value}</div>
    </div>
  );
}
