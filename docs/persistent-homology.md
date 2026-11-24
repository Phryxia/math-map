# 지속 호몰로지

# 개요

**지속 호몰로지(persistent homology)** 는 점들의 모임이 이루는 모양을, 가까운 점끼리 잇는 거리 기준을 키워 가며 생기고 사라지는 구멍의 수명으로 기록하는 방법이다. 원 둘레 근처에 흩어진 측정점 스무 개는 눈으로는 고리이지만, 점은 점일 뿐이어서 [단체 호몰로지](homology.md)를 그대로 계산하면 조각 스무 개만 나온다. 지속 호몰로지는 기준 거리를 $0$ 부터 키우며 호몰로지를 계산하고, 각 구멍이 살아 있는 거리 구간을 기록해 오래 사는 구멍을 데이터의 모양으로 본다.

# 직관

평면의 정사각형 꼭짓점 네 개 $a=(0,0)$, $b=(1,0)$, $c=(1,1)$, $d=(0,1)$ 을 놓는다. 변의 길이는 $1$ 이고 대각선의 길이는 $\sqrt 2$ 다. 기준 거리 $r$ 을 정해, 거리가 $r$ 이하인 두 점을 선분으로 잇고, 세 점이 서로 모두 이어지면 삼각형을 채우고, 네 점이 서로 모두 이어지면 사면체를 채운다.

$r\lt 1$ 이면 이어진 것이 없어 조각이 넷이다. $r$ 이 $1$ 에 닿으면 네 변이 생겨 조각이 하나가 되고, 네 변이 고리 하나를 이룬다. 대각선이 아직 없으므로 채워진 삼각형이 없고 고리는 구멍으로 남는다. $r$ 이 $\sqrt 2$ 에 닿으면 대각선 둘이 생기고 네 점이 서로 모두 이어지므로 사면체가 채워져 구멍이 사라진다.

조각 넷은 $r=0$ 에서 생기고, 그 가운데 셋은 $r=1$ 에서 다른 조각에 합쳐져 사라지며, 하나는 끝까지 남는다. 구멍은 $r=1$ 에서 생겨 $r=\sqrt 2$ 에서 사라진다. 이 기록을 구간으로 적으면 조각은 $\lbrack 0,1)$ 셋과 $\lbrack 0,\infty)$ 하나, 구멍은 $\lbrack 1,\sqrt 2)$ 하나다.

원 둘레 근처의 점 스무 개에서 같은 기록을 하면, 이웃한 점이 이어지는 작은 $r$ 에서 고리가 생기고 원의 지름에 가까운 큰 $r$ 에서야 사라진다. 점의 위치가 조금씩 흔들려 생긴 작은 구멍들은 생기자마자 사라진다. 긴 구간이 원의 구멍이고 짧은 구간이 흔들림이다.

# 정의

## 여과

단체복합체의 증가열 $K_0\subseteq K_1\subseteq\cdots\subseteq K_m$ 을 **여과(filtration)** 라 한다. 실수 $r$ 로 첨자를 붙인 증가족 $(K_r)$ 도 같은 이름으로 부른다. 직관 절의 복합체들은 $r\lt 1$, $1\le r\lt\sqrt 2$, $r\ge\sqrt 2$ 에서 바뀌는 여과다.

[거리 공간](metric-spaces.md)의 유한 부분집합 $X$ 와 $r\ge 0$ 에 대해 **Vietoris–Rips 복합체(Vietoris–Rips complex)** $\mathrm{VR}(X,r)$ 은 지름이 $r$ 이하인 $X$ 의 공집합이 아닌 부분집합들을 단체로 하는 단체복합체다. 직관 절의 규칙이 이것이다. $r\le s$ 이면 $\mathrm{VR}(X,r)\subseteq\mathrm{VR}(X,s)$ 이므로 $r$ 을 키우면 여과가 된다.

## 지속 호몰로지 군

호몰로지는 체 $\mathbb F$ 를 계수로 쓴다. 보통 $\mathbb F=\mathbb Z/2$ 다. $i\le j$ 이면 포함사상 $K_i\hookrightarrow K_j$ 가 선형사상 $f^{i,j}\colon H_k(K_i)\to H_k(K_j)$ 를 유도한다. 그 상을 **지속 호몰로지 군(persistent homology group)** $H_k^{i,j}$ 이라 하고, 차원을 **지속 Betti 수(persistent Betti number)** $\beta_k^{i,j}$ 라 한다.

$$
H_k^{i,j}=\mathrm{im}\thinspace f^{i,j},\qquad\beta_k^{i,j}=\dim H_k^{i,j}
$$

$\beta_k^{i,j}$ 는 $K_i$ 에 이미 있던 $k$ 차 류 가운데 $K_j$ 까지 살아남은 것의 수다. 직관 절에서 $\beta_0^{0,1}=1$ 은 조각 넷 가운데 $r=1$ 까지 따로 남는 것이 하나뿐이라는 뜻이다.

## 탄생과 소멸

류 $\gamma\in H_k(K_i)$ 가 $f^{i-1,i}$ 의 상에 들지 않으면 $\gamma$ 가 $i$ 에서 **태어난다(born)** 고 한다. 그런 $\gamma$ 가 $f^{i,j}(\gamma)\in\mathrm{im}\thinspace f^{i-1,j}$ 를 처음 만족하는 $j$ 에서, 곧 더 일찍 태어난 류와 같아지는 첫 단계에서 **사라진다(dies)** 고 한다. 두 조각이 합쳐지면 늦게 태어난 쪽이 사라진다. 이 규칙을 **선배 규칙(elder rule)** 이라 한다.

태어난 단계 $b$ 와 사라진 단계 $d$ 를 구간 $\lbrack b,d)$ 로 적은 목록을 **바코드(barcode)**, 점 $(b,d)$ 로 평면에 찍은 그림을 **지속 도형(persistence diagram)** 이라 한다. 끝까지 사라지지 않는 류는 $d=\infty$ 로 적는다. 구간의 길이 $d-b$ 를 그 류의 **지속성(persistence)** 이라 한다.

# 성질

## 구조 정리

체 계수의 유한 여과에서 각 $k$ 의 지속 호몰로지는 구간들의 중복집합 하나로 정해지고, 그 구간 목록은 유일하다(Zomorodian–Carlsson, 2005)[^1]. 지속 Betti 수는 구간 목록으로 다음과 같이 적힌다.

$$
\beta_k^{i,j}=\char35{}\lbrace\lbrack b,d)\thinspace:\thinspace b\le i,\ j\lt d\rbrace
$$

증명의 요지. 모든 $H_k(K_i)$ 를 모은 직합에 다항식 $t$ 의 작용을 $f^{i,i+1}$ 로 주면 다항식환 $\mathbb F\lbrack t\rbrack$ 위의 유한생성 등급 가군이 된다. $\mathbb F\lbrack t\rbrack$ 는 주 아이디얼 정역이므로 유한생성 가군의 구조 정리로 $\mathbb F\lbrack t\rbrack$ 의 이동과 $\mathbb F\lbrack t\rbrack/(t^{n})$ 의 이동의 직합으로 분해된다. 앞의 것이 구간 $\lbrack b,\infty)$, 뒤의 것이 구간 $\lbrack b,b+n)$ 이다.

## 경계 행렬의 축약

여과에 들어오는 순서대로 단체를 $\sigma_1,\dots,\sigma_N$ 으로 놓고, 면이 언제나 그 단체보다 앞에 오게 한다. $\mathbb Z/2$ 계수 경계 행렬 $D$ 는 $\sigma_i$ 가 $\sigma_j$ 의 여차원 $1$ 인 면이면 $(i,j)$ 성분이 $1$ 인 $N\times N$ 행렬이다. 열 $j$ 의 가장 아래쪽 $1$ 의 행 번호를 $\mathrm{low}(j)$ 라 한다. 왼쪽 열을 더하는 연산만으로 0 이 아닌 열들의 $\mathrm{low}$ 가 모두 다르게 만든다.

```javascript
// D: 열 배열. 각 열은 1 이 있는 행 번호의 집합(Set). 계수는 Z/2.
function reduce(D) {
  const owner = new Map(); // low 값 -> 그 low 를 가진 열 번호
  const pairs = [];
  for (let j = 0; j < D.length; j++) {
    while (D[j].size > 0) {
      const low = Math.max(...D[j]);
      if (!owner.has(low)) break;
      const k = owner.get(low);
      for (const i of D[k]) D[j].has(i) ? D[j].delete(i) : D[j].add(i); // 열 k 를 더한다
    }
    if (D[j].size > 0) {
      const low = Math.max(...D[j]);
      owner.set(low, j);
      pairs.push([low, j]); // sigma_low 가 낳은 류가 sigma_j 에서 사라진다
    }
  }
  return pairs; // 짝이 없는 단체 가운데 열이 0 인 것이 끝까지 사는 류를 낳는다
}
```

축약이 끝나면 $\mathrm{low}(j)=i$ 인 열마다 $\sigma_i$ 가 낳은 류가 $\sigma_j$ 에서 사라지고, 열이 $0$ 이 된 $\sigma_j$ 는 새 류를 낳는다[^2]. 직관 절에서 변 $ab$, $bc$, $cd$ 의 열은 각각 꼭짓점 하나와 짝지어져 조각 셋을 없애고, 마지막 변 $da$ 의 열은 $0$ 으로 축약되어 구멍을 낳는다. 그 구멍은 $r=\sqrt 2$ 에 들어오는 삼각형 가운데 하나의 열과 짝지어진다. 같은 시점에 대각선이 낳은 류는 같은 시점의 삼각형과 짝지어져 길이 $0$ 인 구간이 되고, 바코드에서는 뺀다. 단체 수 $N$ 에 대해 최악의 경우 $O(N^3)$ 번의 연산이 든다.

## 안정성

두 지속 도형 사이의 **병목 거리(bottleneck distance)** $d_B$ 는 한 도형의 점을 다른 도형의 점이나 대각선 $\lbrace b=d\rbrace$ 위의 점에 일대일로 짝지을 때, 짝지은 두 점의 좌표 차의 최댓값을 가장 작게 한 값이다. 단체마다 들어오는 시점을 주는 두 함수 $f$, $g$ 가 같은 복합체 위의 여과를 정하면 다음이 성립한다(Cohen-Steiner–Edelsbrunner–Harer, 2007)[^3].

$$
d_B\bigl(\mathrm{Dgm}(f),\mathrm{Dgm}(g)\bigr)\le\max_{\sigma}\vert f(\sigma)-g(\sigma)\vert
$$

점 집합의 각 점을 $\varepsilon$ 이하만큼 옮기면 두 점 사이의 거리는 $2\varepsilon$ 이하만큼 바뀌므로, Vietoris–Rips 여과의 지속 도형은 병목 거리로 $2\varepsilon$ 이하만큼 움직인다. 측정 오차가 작으면 긴 구간은 긴 구간으로 남고, 도형에서 대각선 가까이 있던 점만 생기거나 없어진다.

# 활용

- 위상 데이터 분석. 측정값을 거리 공간의 점으로 놓고 Vietoris–Rips 여과의 바코드를 계산해, 지속성이 큰 구간의 수를 데이터의 조각 수와 구멍 수로 읽는다. 안정성 정리가 이 해석을 측정 오차에 대해 정당화한다.
- 함수의 등위 집합. 다양체 위의 함수 $f$ 의 아래 등위 집합 $\lbrace f\le r\rbrace$ 은 $r$ 에 대한 여과이고, 그 바코드의 끝점은 [Morse 이론](morse-theory.md)의 임계값이다. 짧은 구간을 지워 함수의 작은 진동을 없애는 단순화에 쓴다.
- 시계열. 신호 $x(t)$ 를 지연 좌표 $(x(t),x(t+\tau),\dots,x(t+(m-1)\tau))$ 로 옮긴 점구름은 주기 신호이면 고리 모양이다. 1 차 바코드의 가장 긴 구간의 길이로 주기성의 세기를 잰다.

[^1]: A. Zomorodian, G. Carlsson, "Computing persistent homology", Discrete & Computational Geometry 33 (2005), 249–274.
[^2]: H. Edelsbrunner, D. Letscher, A. Zomorodian, "Topological persistence and simplification", Discrete & Computational Geometry 28 (2002), 511–533.
[^3]: D. Cohen-Steiner, H. Edelsbrunner, J. Harer, "Stability of persistence diagrams", Discrete & Computational Geometry 37 (2007), 103–120.

# 연관 문서

## 선수지식

- [단체 호몰로지](homology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #computation #statistics
