import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function SegurancaInformacao() {
  const chaves = [
    { tipo: 'ICP-Brasil A1', uso: 'Assinatura SINISA', emissao: '15 mar 2026', expira: '15 mar 2027', diasRestantes: 318, status: 'ok' },
    { tipo: 'TLS LetsEncrypt', uso: 'titan.sabesp.com.br', emissao: '02 abr 2026', expira: '01 jul 2026', diasRestantes: 60, status: 'ok' },
    { tipo: 'JWT signing key', uso: 'Sessões plataforma', emissao: '01 jan 2026', expira: '01 jan 2027', diasRestantes: 244, status: 'ok' },
    { tipo: 'Database encryption', uso: 'PostgreSQL admin Águas', emissao: '15 set 2025', expira: '15 set 2026', diasRestantes: 136, status: 'ok' },
    { tipo: 'API key INMET', uso: 'Integração meteorológica', emissao: '10 out 2025', expira: '10 jul 2026', diasRestantes: 69, status: 'atenção' },
  ];

  const pentests = [
    { fornecedor: 'Tempest Security', data: '15 mar 2026', escopo: 'Aplicação web + APIs', criticos: 0, altos: 1, medios: 4, baixos: 12, status: 'fechado' },
    { fornecedor: 'BlazeIT', data: '20 set 2025', escopo: 'Infraestrutura OT', criticos: 0, altos: 2, medios: 6, baixos: 8, status: 'fechado' },
    { fornecedor: 'Tempest Security', data: 'agendado set 2026', escopo: 'Aplicação web + APIs (anual)', criticos: '—', altos: '—', medios: '—', baixos: '—', status: 'agendado' },
  ];

  const incidentes = [
    { id: 'SEC-2026-007', tipo: 'Tentativa de força bruta', detectado: '28 abr 03:42', severidade: 'baixo', status: 'mitigado', acao: 'IP bloqueado · 47 tentativas' },
    { id: 'SEC-2026-006', tipo: 'Acesso de IP suspeito', detectado: '15 abr 18:22', severidade: 'médio', status: 'investigado', acao: 'Falso positivo · usuário em viagem' },
    { id: 'SEC-2026-005', tipo: 'Vulnerabilidade em dependência', detectado: '02 abr 09:15', severidade: 'médio', status: 'corrigido', acao: 'Pacote atualizado · CVE-2026-2847' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão da plataforma', 'Segurança da informação']}
        title="Segurança da informação"
        lead="Conformidade com ISO 27001 e práticas NIST. Gestão de chaves criptográficas, registro de incidentes CSIRT, pentest, vulnerabilidades, hardening do servidor."
        actions={<>
          <BtnSecondary>Exportar relatório de postura</BtnSecondary>
          <BtnPrimary>Reportar incidente</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Chaves criptográficas" value="12" hint="próxima rotação 60 dias" />
        <Metric label="Vulnerabilidades abertas" value="3" hint="0 críticas · 1 alta · 2 médias" />
        <Metric label="Score de hardening" value="94/100" delta="+2 vs auditoria anterior" deltaPositive />
        <Metric label="Último pentest" value="48 dias" hint="próximo set 2026" />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Postura de segurança</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            <PostureItem ok label="Criptografia em trânsito" detail="TLS 1.3 · HSTS preload" />
            <PostureItem ok label="Criptografia em repouso" detail="AES-256 · todos os PG" />
            <PostureItem ok label="Segregação IT/OT" detail="rede OT isolada · firewall L7" />
            <PostureItem ok label="Hardening Linux" detail="CIS Benchmark 94%" />
            <PostureItem ok label="Backup automatizado" detail="diário · testado mensalmente" />
            <PostureItem ok label="WAF ativo" detail="Cloudflare Enterprise" />
            <PostureItem warn label="SAST em CI" detail="cobertura 78% · meta 90%" />
            <PostureItem ok label="Logs centralizados" detail="Datadog · retenção 30d" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="12 chaves · próxima ação 60 dias">Gestão de chaves criptográficas</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Tipo</th>
                <th style={thStyle()}>Uso</th>
                <th style={thStyle()}>Emissão</th>
                <th style={thStyle()}>Expira</th>
                <th style={thStyle({ textAlign: 'right' })}>Dias restantes</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {chaves.map((c, i) => (
                <tr key={i} style={{ borderBottom: i < chaves.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500 })}>{c.tipo}</td>
                  <td style={tdStyle({ color: t.colors.stone, fontSize: 12 })}>{c.uso}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{c.emissao}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{c.expira}</td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <span style={{
                      fontFamily: t.font.mono,
                      fontSize: 12,
                      fontWeight: 500,
                      color: c.diasRestantes <= 30 ? t.colors.rust : c.diasRestantes <= 90 ? t.colors.ember : t.colors.forest,
                    }}>{c.diasRestantes}</span>
                  </td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <BtnGhost>Programar rotação</BtnGhost>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
        <div>
          <SectionLabel hint="Cadência anual">Pentests</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                  <th style={thStyle()}>Fornecedor</th>
                  <th style={thStyle()}>Data</th>
                  <th style={thStyle({ textAlign: 'center' })}>C/A/M/B</th>
                  <th style={thStyle({ textAlign: 'center' })}>Status</th>
                </tr>
              </thead>
              <tbody>
                {pentests.map((p, i) => (
                  <tr key={i} style={{ borderBottom: i < pentests.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                    <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{p.fornecedor}</td>
                    <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{p.data}</td>
                    <td style={tdStyle({ textAlign: 'center', fontFamily: t.font.mono, fontSize: 12 })}>
                      <span style={{ color: t.colors.rust }}>{p.criticos}</span>·
                      <span style={{ color: t.colors.ember }}>{p.altos}</span>·
                      <span style={{ color: t.colors.stone }}>{p.medios}</span>·
                      <span style={{ color: t.colors.slate }}>{p.baixos}</span>
                    </td>
                    <td style={tdStyle({ textAlign: 'center' })}>
                      {p.status === 'fechado' ? <Badge type="forest">fechado</Badge> : <Badge type="navy">agendado</Badge>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <SectionLabel>Hardening do servidor</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontSize: 12, color: t.colors.stone, fontWeight: 500 }}>CIS Benchmark Linux</div>
                <div style={{ fontFamily: t.font.mono, fontSize: 16, fontWeight: 500 }}>94<span style={{ color: t.colors.slate, fontSize: 12 }}>/100</span></div>
              </div>
              <div style={{ height: 4, backgroundColor: t.colors.bone, borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: '94%', height: '100%', backgroundColor: t.colors.forest }} />
              </div>
            </div>
            <ToggleField label="SELinux enforcing" checked={true} />
            <ToggleField label="SSH apenas por chave" checked={true} />
            <ToggleField label="Firewall iptables" checked={true} />
            <ToggleField label="Atualizações automáticas" checked={true} helper="Pacotes de segurança" />
            <ToggleField label="Auditd habilitado" checked={true} />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="Fluxo CSIRT separado de eventos operacionais">Incidentes de segurança</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Tipo</th>
                <th style={thStyle()}>Detectado</th>
                <th style={thStyle({ textAlign: 'center' })}>Severidade</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
                <th style={thStyle()}>Ação tomada</th>
              </tr>
            </thead>
            <tbody>
              {incidentes.map((inc, i) => (
                <tr key={inc.id} style={{ borderBottom: i < incidentes.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{inc.id}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{inc.tipo}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{inc.detectado}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {inc.severidade === 'baixo' && <Badge type="navy">baixo</Badge>}
                    {inc.severidade === 'médio' && <Badge type="ember">médio</Badge>}
                    {inc.severidade === 'alto' && <Badge type="rust">alto</Badge>}
                  </td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    <Badge type="forest">{inc.status}</Badge>
                  </td>
                  <td style={tdStyle({ color: t.colors.stone, fontSize: 12 })}>{inc.acao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PostureItem({ ok, warn, label, detail }) {
  const color = ok ? t.colors.forest : warn ? t.colors.ember : t.colors.rust;
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: color }} />
        <span style={{ fontSize: 12, fontWeight: 500, color: t.colors.ink }}>{label}</span>
      </div>
      <div style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono, paddingLeft: 16 }}>{detail}</div>
    </div>
  );
}
