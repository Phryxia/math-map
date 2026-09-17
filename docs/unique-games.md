# 유일게임 추측과 2-to-2 정리

# 개요

[PCP 정리](pcp-theorem.md)는 어떤 문제를 특정 비율보다 잘 근사하는 것이 $\mathrm{NP}$ 난해임을 보인다. 그 한계선과 [반정부호 계획법](semidefinite-programming.md)이 주는 알고리즘의 성능 사이에는 대체로 간극이 남고, 최대 절단이 대표적이다.

| 방향 | 값 |
|---|---|
| Goemans–Williamson 알고리즘이 보장하는 근사비 | $\alpha_{\mathrm{GW}}\approx0.87856$ |
| PCP 로 증명된 난해성 한계 | $16/17\approx0.94118$ |

Khot 은 2002 년에 하나의 문제를 난해하다고 가정하면 이 간극이 닫힌다고 제안했다.[^1] 그 문제가 **유일게임**(unique games)이다.

$$
\textbf{UGC:}\quad \text{임의의 }\varepsilon>0\text{ 에 대해 }k\text{ 가 있어, 라벨 }k\text{ 개인 유일게임에서}
$$
$$
\text{"}1-\varepsilon\text{ 이상 만족 가능" 과 "}\varepsilon\text{ 이하만 만족 가능" 을 구별하는 것이 }\mathrm{NP}\text{-난해}
$$

UGC 가 참이면 최대 절단의 최적 근사비가 $\alpha_{\mathrm{GW}}$ 이고, 모든 제약 충족 문제에 대해 기본 SDP 완화가 최적 알고리즘이다. 하나의 알고리즘 틀이 넓은 문제군에서 더 개선될 수 없다는 통일 정리가 된다.

2018 년에 Khot–Minzer–Safra 등이 **2-to-2 게임 정리**를 증명해 추측의 절반에 해당하는 형태를 확립했다[^1]. 완전한 UGC 는 증명되지 않았다[^1].

# 직관

## 유일게임

변수 집합 위의 2 항 제약 충족 문제인데, 제약이 특별하다. 변수 $u,v$ 를 잇는 각 간선에 순열 $\pi_{uv}\colon[k]\to[k]$ 가 붙고, 제약은

$$
x_v=\pi_{uv}(x_u)
$$

다. 한쪽 변수의 값이 정해지면 다른 쪽이 유일하게 결정되므로, 만족 가능한 사례는 연결성분마다 값 하나를 정해 전파하면 다항시간에 풀린다.

어려움은 거의 만족 가능한 경우에 나타난다. 99% 의 제약을 만족하는 배정이 있을 때 그런 배정을, 또는 1% 라도 만족하는 배정을 찾는 일이 어렵다는 것이 추측이다. 전파가 모순에 부딪히면 어디서 틀렸는지 알 수 없어 전역적으로 최선을 찾아야 한다.

## 2 항 제약의 경계

PCP 정리의 표준 형태는 3 항 제약(3SAT 류)에서 강력하지만 2 항 제약에서는 약하고, 최대 절단과 정점 덮개와 최대 $k$ 절단처럼 중요한 문제들이 2 항이다. 유일게임은 2 항이면서 난해할 수 있는 가장 단순한 후보다. 유일성 조건을 더 강하게 하면 문제가 쉬워지고 약하게 하면 이미 PCP 로 난해성이 알려지므로, 경계에 놓여 있다.

## 잡음 안정성

UGC 에서 최대 절단의 최적성으로 가는 길은 해석적이다. 초입방체 $\lbrace-1,1\rbrace^n$ 위 함수 $f$ 의 **잡음 안정성**

$$
\mathrm{Stab}_\rho(f)=\mathbb E\bigl[f(x)f(y)\bigr],\qquad y\ \text{는}\ x\ \text{의 각 좌표를 확률}\ \tfrac{1-\rho}{2}\ \text{로 뒤집은 것}
$$

이 양을 최대화하는 함수는 좌표 하나에만 의존하는 독재자 함수 $f(x)=x_i$ 이고, 모든 좌표의 영향력이 작다는 조건을 걸면 다수결이다. 이것이 Mossel–O'Donnell–Oleszkiewicz 의 Majority is Stablest 정리다.

이 정리가 UGC 를 근사 난해성으로 번역한다. 유일게임 사례에서 정점마다 함수를 하나씩 두고 절단 문제로 옮기면 좋은 배정의 존재가 독재자 함수의 존재로, 나쁜 배정뿐인 상황이 영향력이 작은 함수만 있는 상황으로 바뀌고, 두 경우의 절단 값 차이가 $\alpha_{\mathrm{GW}}$ 만큼 벌어진다.

## 근사비 $\alpha_{\mathrm{GW}}$

GW 알고리즘은 절단 문제를 단위구 위 벡터 배치로 완화하고, 무작위 초평면으로 자른다. 두 벡터의 각이 $\theta$ 면 잘릴 확률이 $\theta/\pi$ 인 반면 SDP 목적값 기여는 $(1-\cos\theta)/2$ 다. 비율의 최솟값이 근사비다.

```javascript
// α_GW = min_{0<θ≤π} (θ/π) / ((1-cos θ)/2)
let best = [Infinity, 0];
for (let i = 1; i <= 200000; i++) {
  const th = Math.PI * i / 200000;
  const v = (2 / Math.PI) * th / (1 - Math.cos(th));
  if (v < best[0]) best = [v, th];
}
console.log('α_GW =', best[0].toFixed(6), 'at θ* =', (best[1] * 180 / Math.PI).toFixed(3), '도');
// α_GW = 0.878567 at θ* = 133.564 도
console.log('PCP 로 알려진 한계 16/17 =', (16 / 17).toFixed(6));   // 0.941176
```

$0.878567$ 과 $0.941176$ 사이가 비어 있고, UGC 가 참이면 아래쪽 값이 정답이다. 최솟값이 나오는 각 $133.6^\circ$ 가 Majority is Stablest 의 극단 함수에서 다시 나타나므로, 알고리즘의 손실과 난해성의 구성이 같은 지점을 가리킨다.

# 정의

## 유일게임

사례는 $(G=(V,E),[k],\lbrace\pi_e\rbrace\_{e\in E})$ 로 주어진다. $\pi_{uv}$ 는 $[k]$ 의 순열이고, 배정 $x\colon V\to[k]$ 의 값은 $x_v=\pi_{uv}(x_u)$ 를 만족하는 간선의 비율이다. 최댓값을 $\mathrm{opt}(I)$ 라 한다.

## 추측의 진술

**유일게임 추측.** 모든 $\varepsilon>0$ 에 대해 $k=k(\varepsilon)$ 이 존재해, 라벨 크기 $k$ 의 유일게임 사례에서 $\mathrm{opt}\ge1-\varepsilon$ 인 경우와 $\mathrm{opt}\le\varepsilon$ 인 경우를 구별하는 문제가 $\mathrm{NP}$ 난해다.

완전성 $1-\varepsilon$ 이 $1$ 에 가깝다는 점이 결정적이다. PCP 정리의 표준 형태는 완전성 $1$ 에서 출발하지만 유일게임에서 완전성 $1$ 인 경우는 다항시간에 풀리므로, $1-\varepsilon$ 이라는 위치가 필요하다.

## 2-to-2 게임

제약이 순열이 아니라 각 값이 정확히 두 값에 대응하는 2-to-2 사상인 게임이다. **2-to-2 정리**(Khot–Minzer–Safra, Dinur–Khot–Kindler–Minzer–Safra)는 완전성 $1/2-\varepsilon$ 판본의 난해성을 증명한다. 완전성이 $1$ 에 가깝지 않으므로 UGC 를 직접 주지는 않지만, 무조건적인 새 난해성 결과들을 낳았다. 정점 덮개를 $\sqrt2-\varepsilon$ 보다 잘 근사하는 것이 $\mathrm{NP}$ 난해라는 결과가 대표적이다.

증명의 핵심은 Grassmann 그래프의 확장성 분석이다. 작은 집합에서 확장성이 깨지는 방식을 완전히 분류하는 조합 정리(Grassmann 그래프 추측)가 필요했고, 그것이 2018 년에 해결되면서 정리가 완성되었다.

# 성질

## UGC 의 따름결과

- **최대 절단.** 최적 근사비가 $\alpha_{\mathrm{GW}}$ 다. GW 알고리즘이 최적이다.
- **정점 덮개.** $2-\varepsilon$ 근사가 난해. 자명한 $2$ 근사가 최적이다.
- **모든 CSP.** Raghavendra 의 정리에 의해, 임의의 제약 충족 문제에서 기본 SDP 완화의 적분 간극과 근사 난해성 한계가 일치한다. 문제마다 알고리즘을 새로 설계할 이유가 없어진다.

마지막 항목에서 하나의 추측이 무한히 많은 문제의 최적 알고리즘을 한꺼번에 결정한다.

## 반대 방향의 증거

Arora–Barak–Steurer 는 유일게임을 $2^{n^{\varepsilon}}$ 시간에 푸는 알고리즘을 주었다. UGC 를 반증하지는 않지만, UGC 가 참이라면 그 난해성이 $3\mathrm{SAT}$ 같은 문제보다 약한 형태여야 한다는 제약을 준다.

Sum-of-Squares 위계도 반증 경로로 검토되었다. 낮은 차수의 SoS 완화가 유일게임의 알려진 어려운 사례들을 모두 푼다는 결과가 여럿 있지만, 결정적인 결과는 나오지 않았다.

## 소집합 확장 추측과의 관계

UGC 는 **소집합 확장 추측**(SSEH)에서 따라온다[^2]. 그래프의 작은 집합들이 모두 잘 확장되는지 판정하는 문제의 난해성이며 더 조합적이다. 알려진 함의는 이 한 방향뿐이고 역방향은 증명되어 있지 않다[^2].

# 활용

## 알고리즘 설계의 지침

UGC 아래에서 CSP 를 근사하는 최선의 절차는 기본 SDP 완화를 세우고 반올림하는 것이며, 그보다 나은 근사는 불가능하다. 이 지침에 따라 연구 자원이 SDP 반올림 기법의 개선과 CSP 가 아닌 문제(그래프 분할, 클러스터링)로 옮겨갔다.

## 해석과 조합의 도구

UGC 를 둘러싼 작업은 이론 전산학에 부울 함수 해석학을 정착시켰다. 초입방체 위 Fourier 전개, 초축약성 부등식, 불변원리가 표준 언어가 되었고 [Expander 그래프](expander-graphs.md)의 스펙트럼 기법과 결합해 별개의 연구 분야를 이루었다.

## 무조건적 결과들

2-to-2 정리 이후 UGC 를 가정하지 않고 얻어진 난해성 결과가 여럿 있다. 정점 덮개의 $\sqrt2-\varepsilon$ 난해성과 특정 유일게임 사례에 대한 부분적 난해성이 그렇다.

[^1]: S. Khot, *On the power of unique 2-prover 1-round games*, STOC (2002), 767–775. Majority is Stablest 는 E. Mossel, R. O'Donnell, K. Oleszkiewicz, Ann. of Math. **171** (2010). 통일 정리는 P. Raghavendra, *Optimal algorithms and inapproximability results for every CSP?*, STOC (2008). 2-to-2 정리는 S. Khot, D. Minzer, M. Safra, *Pseudorandom sets in Grassmann graph have near-perfect expansion*, FOCS (2018). 준지수 알고리즘은 S. Arora, B. Barak, D. Steurer, FOCS (2010).
[^2]: P. Raghavendra, D. Steurer, "Graph expansion and the Unique Games Conjecture", STOC (2010), 755–764. 소집합 확장 추측을 제기하고 그것이 UGC 를 함의함을 보인다.

# 연관 문서

## 선수지식

- [PCP 정리와 근사 불가능성](pcp-theorem.md)
- [반정부호 계획법과 최대 절단](semidefinite-programming.md)
- [부울 함수의 Fourier 해석](boolean-fourier.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #algorithms #optimization
