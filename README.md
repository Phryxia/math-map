# 수학 지도

🥕 이 프로젝트는 순수하게 Claude에 의해서만 관리되는 수학 지식 그래프입니다.

개념 증명에 가까운 실험이며, 잘못된 내용이 포함돼 있을 수 있습니다.

## 구조

`docs/` 아래 마크다운 문서 하나가 정점 하나다. 문서 끝 `# 연관 문서` 절의 링크가 간선이 되고, 방향은 선수지식에서 후속 개념으로 간다. 부모 문서를 읽지 않으면 자식 문서를 이해할 수 없도록 간선을 긋는 것이 규칙이라, 전체 그래프는 순환 없는 DAG 로 유지된다.

뿌리는 [집합](docs/sets.md)과 [명제와 증명](docs/proofs.md) 둘뿐이다. 나머지 문서는 모두 이 둘에서 출발하는 경로 위에 놓인다.

현재 문서 343 개, 간선 630 개, 태그 34 종이다. 갱신과 검증에 쓰는 스크립트는 `dev/` 에 있고, 탐사 절차는 [CLAUDE.md](CLAUDE.md) 에 적혀 있다.

## 지도의 경계

아래는 그래프의 maximal 요소다. 아직 후속 문서가 달리지 않은 92 개 문서이고, 각 분야에서 지도가 지금 어디까지 왔는지를 보여준다. 다음 회차의 탐사는 보통 이 가운데 하나에서 시작한다.

### 수론

- [과수렴 모듈러 기호와 p 진 L 함수](docs/overconvergent-modular-symbols.md)
- [Borcherds 곱과 특이 theta 올림](docs/borcherds-products.md)
- [Casselman–Shalika 공식](docs/casselman-shalika.md)
- [Chebotarev 밀도 정리](docs/chebotarev.md)
- [Deuring 대응과 사원수 알고리즘](docs/deuring-correspondence.md)
- [Fargues–Scholze 기하화와 국소 Langlands](docs/fargues-scholze.md)
- [Greenberg 추측과 총실수체의 Iwasawa 불변량](docs/greenberg-conjecture.md)
- [Kedlaya 알고리즘과 p 진 점 세기](docs/kedlaya-algorithm.md)
- [Kolyvagin 계와 핵심계수](docs/kolyvagin-systems.md)
- [Merel 의 일양 유계성 정리](docs/merel-theorem.md)
- [MV 순환과 무게 기저의 기하](docs/mv-cycles.md)
- [Schoof–Elkies–Atkin 알고리즘](docs/sea-algorithm.md)
- [Sen 이론과 Hodge–Tate 무게](docs/sen-theory.md)
- [Serre 추측과 Khare–Wintenberger 정리](docs/serre-conjecture.md)
- [Shimura 대응과 반정수 무게 형식](docs/shimura-correspondence.md)
- [Speh 표현과 잔여 스펙트럼](docs/speh-representations.md)
- [Tunnell–Saito 국소 부호 공식](docs/tunnell-saito.md)
- [Umbral moonshine 과 Mathieu 달빛](docs/umbral-moonshine.md)

### 대수와 표현론

- [구면조화함수와 SO(3) 의 표현](docs/spherical-harmonics.md)
- [대수적 K 이론과 Quillen–Lichtenbaum](docs/algebraic-k-theory.md)
- [범주 O 와 BGG 상반성](docs/category-o.md)
- [Beilinson–Bernstein 국소화](docs/beilinson-bernstein.md)
- [Brauer 대수와 직교군 쌍대성](docs/brauer-algebras.md)
- [Schellekens 목록과 홀로모픽 c=24 VOA 분류](docs/schellekens-list.md)
- [Schubert 계산과 Grassmann 다양체](docs/schubert-calculus.md)
- [Schur 곱셈자와 보편 중심확대](docs/schur-multipliers.md)

### 기하와 위상

- [기하화 정리와 8 개 모형 기하](docs/geometrization.md)
- [땋임군과 Alexander–Markov 정리](docs/braid-groups.md)
- [볼륨 추측과 색 Jones 다항식](docs/volume-conjecture.md)
- [순간자 Floer 호몰로지](docs/instanton-floer-homology.md)
- [애니온과 위상적 양자계산](docs/anyons.md)
- [연결성](docs/connectedness.md)
- [Kähler 다양체와 Hodge 분해](docs/kahler-manifolds.md)
- [Khovanov 호몰로지](docs/khovanov-homology.md)
- [Poincaré–Hopf 정리](docs/poincare-hopf.md)
- [s-코보디즘 정리와 고차원 Poincaré 추측](docs/s-cobordism.md)
- [Teichmüller 공간과 곡면의 모듈라이](docs/teichmuller-space.md)
- [Wess–Zumino–Witten 모형과 벌크–경계 대응](docs/wess-zumino-witten.md)
- [Witten 점근 추측과 Ohtsuki 급수](docs/witten-asymptotics.md)

### 해석

- [균등수렴](docs/uniform-convergence.md)
- [균등적분가능성](docs/uniform-integrability.md)
- [비유계 작용소와 Stone 정리](docs/unbounded-operators.md)
- [정확한 WKB 와 Voros 기호](docs/exact-wkb.md)
- [Banach 공간과 세 기본정리](docs/banach-spaces.md)
- [Mellin 변환과 Perron 공식](docs/mellin-transform.md)

### 확률과 통계

- [선형회귀와 최소제곱법](docs/linear-regression.md)
- [신뢰구간](docs/confidence-intervals.md)
- [지수족과 충분통계량](docs/exponential-families.md)
- [집중부등식](docs/concentration-inequalities.md)
- [Bayes 추론과 사후분포](docs/bayesian-inference.md)
- [Feynman–Kac 공식](docs/feynman-kac.md)
- [Marchenko–Pastur 법칙](docs/marchenko-pastur.md)
- [Tracy–Widom 분포와 Airy 핵](docs/tracy-widom.md)

### 조합과 그래프

- [네트워크 흐름과 최대유량 최소절단 정리](docs/network-flow.md)
- [논문: Graph Sparsification by Effective Resistances](docs/spectral-sparsification.md)
- [논문: How Powerful are Graph Neural Networks?](docs/gnn-expressivity.md)
- [매칭과 Hall 정리](docs/matchings.md)
- [완전그래프와 강한 완전그래프 정리](docs/perfect-graphs.md)
- [최소 신장트리](docs/minimum-spanning-tree.md)
- [평면 그래프](docs/planar-graphs.md)
- [포함배제 원리](docs/inclusion-exclusion.md)
- [확률적 방법](docs/probabilistic-method.md)
- [Dyson 의 rank 와 crank](docs/dyson-rank-crank.md)
- [Littlewood–Richardson 규칙과 hive 모형](docs/littlewood-richardson.md)
- [Ramanujan 그래프의 명시적 구성](docs/ramanujan-graphs.md)

### 논리와 기초

- [구조적 집합론과 동형 불변성](docs/structural-set-theory.md)
- [논리주의와 Frege 프로그램](docs/logicism.md)
- [선택공리와 Zorn 보조정리](docs/axiom-of-choice.md)
- [연속체 가설과 독립성](docs/continuum-hypothesis.md)
- [제한과 쌍대제한](docs/limits-colimits.md)
- [형식주의와 Hilbert 프로그램](docs/formalism-hilbert-program.md)
- [Boolean algebra](docs/boolean-algebras.md)
- [Compactness 정리와 Löwenheim–Skolem 정리](docs/lowenheim-skolem.md)
- [Curry–Howard 대응](docs/curry-howard.md)
- [Heyting algebra](docs/heyting-algebras.md)
- [Kleisli 범주와 Eilenberg–Moore 범주](docs/kleisli-eilenberg-moore.md)

### 계산과 최적화

- [고속 Fourier 변환과 합성곱](docs/fft.md)
- [불균형 최적 수송](docs/unbalanced-optimal-transport.md)
- [완전동형암호](docs/homomorphic-encryption.md)
- [유일게임 추측과 2-to-2 정리](docs/unique-games.md)
- [유한 오토마타와 정규언어](docs/finite-automata.md)
- [채널 부호화 정리](docs/channel-coding.md)
- [최단경로와 Bellman 방정식](docs/shortest-paths.md)
- [추상해석과 정적 분석의 건전성](docs/abstract-interpretation.md)
- [커널 PCA](docs/kernel-pca.md)
- [흐름 정합](docs/flow-matching.md)
- [Link-cut tree](docs/link-cut-trees.md)
- [Newton 법](docs/newton-method.md)
- [Rice 정리](docs/rice-theorem.md)
- [RSA 암호](docs/rsa-cryptosystem.md)
- [Wasserstein 기울기 흐름](docs/wasserstein-gradient-flow.md)
- [Weil 쌍과 쌍선형 암호](docs/pairing-based-cryptography.md)
