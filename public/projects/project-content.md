# Portfolio Project Content and Screenshot Map

These descriptions are grounded in the supplied CYB301, CYB302 and CYB204 assessment materials. Keep the labels **Academic project** or **Group academic project** visible so the portfolio does not imply paid commercial experience.

---

## 1. Ethical Hacking Security Lab

**Suggested category:** Group Academic Cybersecurity Project  
**Suggested status:** Completed academic project  
**Preview image:** `/projects/ethical-hacking-security-lab.jpg`

### Short card description
A controlled red-team/blue-team lab using Kali Linux, Metasploitable and DVWA. The team enumerated exposed services with Nmap, safely validated SQL injection, applied a higher security configuration and retested the same input to demonstrate reduced exposure.

### Extended details
- Built an isolated host-only VirtualBox environment; no public or real systems were targeted.
- Used Nmap to identify exposed services and understand the attack surface.
- Validated SQL injection in DVWA using a non-destructive test payload.
- Compared the vulnerable Low security configuration with a hardened High configuration.
- Documented secure coding, service reduction, monitoring and retesting recommendations.
- **My documented contribution:** methodology and tools explanation, plus presentation conclusion.

### Technologies
`Kali Linux` `Nmap` `DVWA` `Metasploitable` `VirtualBox` `SQL Injection` `Blue Team Retesting`

### Evidence gallery
- `/projects/evidence/ethical/01-nmap-service-enumeration.png`
- `/projects/evidence/ethical/02-dvwa-sql-injection-validation.png`
- `/projects/evidence/ethical/03-dvwa-high-security-retest.png`

### Safe portfolio wording
Do not describe this as penetration testing against a real organisation. State clearly that it was an authorised simulated lab.

---

## 2. Computer Forensics Investigation

**Suggested category:** Group Academic Digital Forensics Project  
**Suggested status:** Completed academic project  
**Preview image:** `/projects/computer-forensics-investigation.jpg`

### Short card description
A forensic examination of a supplied Dell Latitude disk image using Autopsy. The investigation preserved and validated the evidence image, examined user and software artefacts, correlated tool execution and browser activity, and reconstructed a timeline of relevant events.

### Extended details
- Imported and analysed the supplied forensic image rather than modifying the original evidence.
- Verified image integrity using the recorded MD5 hash.
- Reviewed OS information, user accounts, installed and executed programs, browser history, shell bags, USB records and timeline events.
- Correlated multiple artefact categories rather than relying on a single screenshot.
- Documented limitations: no live memory, active network traffic or external intelligence was available.
- **My documented contribution:** forensic acquisition and validation, evidence handling and hash-integrity explanation.

### Technologies
`Autopsy` `E01 Disk Image` `MD5 Verification` `Timeline Analysis` `Windows Artefacts` `Digital Forensics`

### Evidence gallery
- `/projects/evidence/forensics/01-autopsy-image-integrity-and-hash.png`
- `/projects/evidence/forensics/02-autopsy-installed-tools-analysis.png`
- `/projects/evidence/forensics/03-autopsy-timeline-reconstruction.png`

### Optional additional evidence
A separate individual CYB301 validation report compared Autopsy and FTK Imager on the same E01 dataset and confirmed a recovered JPEG in a recovered NTFS partition. This could later become a separate case study titled **Forensic Tool Validation: Autopsy vs FTK Imager**.

---

## 3. StreamFast DevSecOps Monitoring Lab

**Suggested category:** Individual Academic DevSecOps Project  
**Suggested status:** Completed academic project  
**Preview image:** `/projects/streamfast-devsecops-monitoring.jpg`

### Short card description
An individual Kubernetes deployment and monitoring lab for a fictional video-streaming frontend. The project deployed three application replicas, added health checks and autoscaling, and used Prometheus and Grafana to monitor CPU, memory, networking, targets and alerts.

### Extended details
- Created Kubernetes manifests for ConfigMap, Deployment, Service and HorizontalPodAutoscaler.
- Deployed a simple StreamFast frontend with three replicas in a local Docker Desktop/kind cluster.
- Added resource requests and limits, readiness probes and liveness probes.
- Configured autoscaling from a minimum of 3 to a maximum of 8 replicas at an 80% CPU target.
- Installed kube-prometheus-stack through Helm.
- Validated monitoring through Grafana dashboards and Prometheus targets, alerts and queries.
- Documented local-lab limitations and production improvements such as Secrets, network policies, access control, encryption and audit logging.

### Technologies
`Kubernetes` `Docker Desktop` `kind` `Helm` `Prometheus` `Grafana` `YAML` `Autoscaling`

### Evidence gallery
- `/projects/evidence/devsecops/01-kubernetes-streamfast-deployment.png`
- `/projects/evidence/devsecops/02-grafana-cpu-memory-dashboard.png`
- `/projects/evidence/devsecops/03-prometheus-target-health.png`

### Better title than the current generic card
Replace **Secure Applications and DevSecOps Portfolio** with **StreamFast DevSecOps Monitoring Lab**. It is specific, evidence-based and easier for recruiters to understand.

---

## Recommended Project Order

1. Abyss Bond - Unity Gameplay Prototype
2. Ethical Hacking Security Lab
3. Computer Forensics Investigation
4. StreamFast DevSecOps Monitoring Lab
5. Live Sticky Wall

This order immediately shows a playable project, followed by cybersecurity, forensics and DevSecOps evidence.
