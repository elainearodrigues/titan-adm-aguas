import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function Continuidade() {
  const backups = [
    { dt: '02 mai 2026 02:00', tipo: 'Diário · incremental', tamanho: '4.2 GB', duracao: '14m 32s', status: 'sucesso' },
    { dt: '01 mai 2026 02:00', tipo: 'Diário · incremental', tamanho: '4.0 GB', duracao: '14m 18s', status: 'sucesso' },
    { dt: '30 abr 2026 02:00', tipo: 'Diário · incremental', tamanho: '4.1 GB', duracao: '14m 40s', status: 'sucesso' },
    { dt: '28 abr 2026 02:00', tipo: 'Semanal · completo', tamanho: '187 GB', duracao: '2h 47m', status: 'sucesso' },
    { dt: '21 abr 2026 02:00', tipo: 'Semanal · completo', tamanho: '184 GB', duracao: '2h 51m', status: 'sucesso' },
  ];

  const drills = [
    { dt: '15 abr 2026', tipo: 'Restauração de PostgreSQL Admin Águas', resultado: 'sucesso', rto: '42 min', rpo: '8h', responsavel: 'DevOps' },
    { dt: '15 mar 2026', tipo: 'Failover Núcleo Águas para réplica', resultado: 'sucesso', rto: '8 min', rpo: '0', responsavel: 'DevOps' },
    { dt: '15 fev 2026', tipo: 'Restauração TimescaleDB Efluentes', resultado: 'sucesso', rto: '1h 18m', rpo: '15min', responsavel: 'DevOps' },
    { dt: '15 jan 2026', tipo: 'Simulação perda total datacenter', resultado: 'parcial', rto: '4h 32m', rpo: '2h', responsavel: 'DevOps + SRE' },
  ];

  const runbooks = [
    { id: 'RB-001', titulo: 'Falha de comunicação SCADA com núcleo', severidade: 'crítica', responsavel: 'SRE on-call', updated: '12 abr 2026' },
    { id: 'RB-002', titulo: 'Indisponibilidade da assinatura ICP-Brasil', severidade: 'alta', responsavel: 'Equipe regulatória', updated: '02 abr 2026' },
    { id: 'RB-003', titulo: 'Alerta de violação de envelope de segurança', severidade: 'crítica', responsavel: 'Eng. responsável', updated: '15 mar 2026' },
    { id: 'RB-004', titulo: 'Comunicação à ANPD em 72h após incidente LGPD', severidade: 'alta', responsavel: 'DPO + jurídico', updated: '15 mar 2026' },
    { id: 'RB-005', titulo: 'Fallback automático modo Auto → DSS', severidade: 'média', responsavel: 'Operação local', updated: '28 fev 2026' },
    { id: 'RB-006', titulo: 'Recuperação de partição TimescaleDB', severidade: 'média', responsavel: 'DevOps', updated: '15 fev 2026' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão da plataforma', 'Continuidade']}
        title="Continuidade"
        lead="Política de backup com testes de restauração, plano de continuidade de negócios, plano de recuperação de desastres, runbooks de resposta a incidentes críticos."
        actions={<>
          <BtnSecondary>Executar drill</BtnSecondary>
          <BtnPrimary>Novo runbook</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Último backup" value="14h" delta="status: sucesso" deltaPositive />
        <Metric label="RTO objetivo" value="≤ 4h" hint="recuperação de operação" />
        <Metric label="RPO objetivo" value="≤ 1h" hint="perda máxima de dados" />
        <Metric label="Próximo drill" value="15 mai 2026" hint="restauração admin Efluentes" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
        <div>
          <SectionLabel>Política de backup</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <ToggleField label="Backup diário automático" checked={true} helper="02:00 BRT · todos os clusters" />
            <ToggleField label="Backup completo semanal" checked={true} helper="Domingos 02:00 · retenção 30 dias" />
            <ToggleField label="Replicação para AWS S3" checked={true} helper="us-east-1 + sa-east-1 · cross-region" />
            <ToggleField label="Criptografia AES-256" checked={true} helper="Chaves geridas em vault" />
            <ToggleField label="Verificação de integridade" checked={true} helper="Hash SHA-256 pós-backup" />
            <ToggleField label="Teste de restauração mensal" checked={true} helper="Drill obrigatório dia 15" />
          </div>
        </div>

        <div>
          <SectionLabel>BCP e DRP</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
            <PlanRow label="Plano de Continuidade (BCP)" version="v3.1" date="Aprovado 15 fev 2026" status="vigente" />
            <PlanRow label="Plano de Recuperação (DRP)" version="v2.4" date="Aprovado 15 fev 2026" status="vigente" />
            <PlanRow label="Análise de Impacto (BIA)" version="v2.2" date="Atualizada 01 mar 2026" status="vigente" />
            <PlanRow label="Matriz de risco" version="v3.0" date="Atualizada 15 abr 2026" status="vigente" last />
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${t.colors.bone}` }}>
              <BtnSecondary>Acessar repositório de planos</BtnSecondary>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="5 mais recentes · retenção 30 dias completos · 15 dias incrementais">Histórico de backups</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Data</th>
                <th style={thStyle()}>Tipo</th>
                <th style={thStyle({ textAlign: 'right' })}>Tamanho</th>
                <th style={thStyle({ textAlign: 'right' })}>Duração</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {backups.map((b, i) => (
                <tr key={i} style={{ borderBottom: i < backups.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{b.dt}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{b.tipo}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{b.tamanho}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{b.duracao}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    <Badge type="forest">{b.status}</Badge>
                  </td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <BtnGhost>Verificar integridade</BtnGhost>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="Cadência mensal · dia 15">Histórico de drills de recuperação</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Data</th>
                <th style={thStyle()}>Cenário</th>
                <th style={thStyle({ textAlign: 'right' })}>RTO atingido</th>
                <th style={thStyle({ textAlign: 'right' })}>RPO atingido</th>
                <th style={thStyle()}>Responsável</th>
                <th style={thStyle({ textAlign: 'center' })}>Resultado</th>
              </tr>
            </thead>
            <tbody>
              {drills.map((d, i) => (
                <tr key={i} style={{ borderBottom: i < drills.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{d.dt}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{d.tipo}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{d.rto}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{d.rpo}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{d.responsavel}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {d.resultado === 'sucesso'
                      ? <Badge type="forest">sucesso</Badge>
                      : <Badge type="ember">parcial</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="6 ativos · cobertura crítica">Runbooks operacionais</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Cenário</th>
                <th style={thStyle({ textAlign: 'center' })}>Severidade</th>
                <th style={thStyle()}>Responsável primário</th>
                <th style={thStyle()}>Atualizado</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {runbooks.map((r, i) => (
                <tr key={r.id} style={{ borderBottom: i < runbooks.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{r.id}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{r.titulo}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {r.severidade === 'crítica' && <Badge type="rust">crítica</Badge>}
                    {r.severidade === 'alta' && <Badge type="ember">alta</Badge>}
                    {r.severidade === 'média' && <Badge type="navy">média</Badge>}
                  </td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{r.responsavel}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{r.updated}</td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <BtnGhost>Abrir runbook</BtnGhost>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PlanRow({ label, version, date, status, last }) {
  return (
    <div style={{
      padding: '12px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 500, color: t.colors.ink, marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>{date}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 12, fontFamily: t.font.mono, color: t.colors.navy, fontWeight: 500 }}>{version}</span>
        <Badge type="forest">{status}</Badge>
      </div>
    </div>
  );
}
