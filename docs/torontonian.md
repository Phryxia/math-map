# 토론토니안

# 개요

**토론토니안(torontonian)** 은 광자가 왔는지만 알리는 검출기로 [Gauss 보손 표본추출](gaussian-boson-sampling.md)을 할 때, 어느 검출기들이 울리는지의 확률을 주는 행렬 함수다. 출구 두 개의 검출기가 함께 울릴 확률은 두 출구에 광자가 $1$ 개씩, $2$ 개씩, $3$ 개씩 나올 확률을 끝없이 더해야 나온다. 토론토니안은 이 무한합을 "어느 검출기들이 조용한가" 의 확률로 바꿔, 울린 검출기가 $N$ 개이면 행렬식 $2^N$ 개의 유한합으로 계산한다.

# 직관

Gauss 보손 표본추출 문서의 반투명 거울 예에서 두 출구의 광자 수는 언제나 같고, $(k,k)$ 가 나올 확률은 $\tfrac34\cdot(\tfrac14)^k$ 이다. 광자 수를 세는 검출기 대신 광자가 하나 이상 오면 울리고 없으면 조용한 검출기를 둔다. 두 검출기가 함께 울릴 확률은 다음 무한합이다.

$$
\frac3{16}+\frac3{64}+\frac3{256}+\cdots=\frac14
$$

이 예에서는 등비급수라 합이 나오지만, 모드가 많고 회로가 일반적이면 항마다 [hafnian](hafnian.md)의 절댓값 제곱이고 항의 수가 끝이 없다.

울리는 사건 대신 조용한 사건을 본다. 두 검출기가 모두 조용할 확률은 $(0,0)$ 의 확률 $\tfrac34$ 하나이고, 검출기 1 이 조용할 확률과 검출기 2 가 조용할 확률도 각각 $\tfrac34$ 이다. [포함배제 원리](inclusion-exclusion.md)로 두 검출기가 함께 울릴 확률은 $1-\tfrac34-\tfrac34+\tfrac34=\tfrac14$ 이다. 조용할 확률은 출력 상태에서 그 모드들의 광자를 지운 것의 크기라 행렬식 하나로 계산된다.

# 정의

## 문턱 검출기와 클릭 배치

광자가 하나 이상 오면 $1$, 오지 않으면 $0$ 을 내는 검출기를 **문턱 검출기(threshold detector)** 라 한다. 모드 $m$ 개의 출구마다 문턱 검출기를 두었을 때 $1$ 을 낸 모드의 집합 $S\subseteq\lbrace 1,\dots,m\rbrace$ 을 **클릭 배치(click pattern)** 라 한다. 직관 절의 클릭 배치는 $\varnothing$ 과 $\lbrace 1,2\rbrace$ 둘뿐이다.

## 토론토니안

$N\times N$ 복소 대칭행렬 $C$ 의 특이값이 모두 $1$ 보다 작다고 하자. 행과 열을 $Z\subseteq\lbrace 1,\dots,N\rbrace$ 로 제한한 부분행렬을 $C_Z$ 로 적는다. 다음 값을 $C$ 의 토론토니안이라 한다[^1].

$$
\mathrm{Tor}\thinspace C=\sum_{Z\subseteq\lbrace 1,\dots,N\rbrace}(-1)^{N-\vert Z\vert}\det\big(I-C_Z\overline{C_Z}\big)^{-1/2}
$$

$Z=\varnothing$ 의 항은 $(-1)^N$ 이다. 직관 절의 행렬 $B=\tfrac12\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 에서는 $B_{\lbrace 1\rbrace}=B_{\lbrace 2\rbrace}=0$ 이고 $B\overline B=\tfrac14I$ 이므로 다음이 나온다.

$$
\mathrm{Tor}\thinspace B=1-1-1+\Big(\frac34\Big)^{-1}=\frac13
$$

Quesada, Arrazola, Killoran 은 혼합 상태까지 다루려고 공분산 행렬로 만든 $2N\times 2N$ 행렬의 행렬식으로 같은 합을 적었다[^1]. 이 문서는 순수 상태의 꼴로 적는다.

# 성질

## 진공 확률

Gauss 보손 표본추출의 출력 상태가 $c\exp(\tfrac12y^{\mathsf T}By)$ 이고 $c=\prod_j(1-t_j^2)^{1/4}$ 라 하자. $Z$ 밖의 모드에 광자가 하나도 없을 확률을 $P_Z$ 라 하면 다음과 같다.

$$
P_Z=c^2\det\big(I-B_Z\overline{B_Z}\big)^{-1/2}
$$

증명의 요지. $Z$ 밖의 변수를 $0$ 으로 두면 상태가 $c\exp(\tfrac12y_Z^{\mathsf T}B_Zy_Z)$ 로 바뀌고, 구하는 확률은 이 다항식의 크기의 제곱이다. [Takagi 분해](takagi-factorization.md) $B_Z=VDV^{\mathsf T}$ 에서 $V$ 는 크기를 바꾸지 않으므로, 대각 성분 $d_j$ 마다 압착 진공의 크기의 제곱 $(1-d_j^2)^{-1/2}$ 을 곱하면 된다. $B_Z\overline{B_Z}=VD^2V^\dagger$ 이므로 그 곱이 $\det(I-B_Z\overline{B_Z})^{-1/2}$ 이다.

$Z$ 가 모드 전체이면 $B\overline B=U\thinspace\mathrm{diag}(t_j^2)\thinspace U^\dagger$ 라 우변이 $1$ 이다. 직관 절에서 $Z=\lbrace 1\rbrace$ 이면 $B_Z=0$ 이라 우변이 $c^2=\tfrac34$ 다.

## 클릭 확률 공식

클릭 배치 $S$ 의 확률은 다음과 같다[^1].

$$
\Pr\lbrack S\rbrack=\prod_{j=1}^{m}(1-t_j^2)^{1/2}\cdot\mathrm{Tor}\thinspace B_S
$$

증명의 요지. 클릭 배치가 $S$ 인 것은 $S$ 밖이 모두 비어 있고 $S$ 의 각 모드에 광자가 있는 것이다. $S$ 의 부분집합 $Z$ 마다 $P_Z$ 에 포함배제를 쓰면 부호 $(-1)^{\vert S\vert-\vert Z\vert}$ 가 붙고, 진공 확률 공식을 넣으면 토론토니안이 나온다. 직관 절에서 $S=\lbrace 1,2\rbrace$ 이면 $\tfrac34\cdot\tfrac13=\tfrac14$ 이다.

## Hafnian 과의 관계

광자 수 배치 $s$ 가운데 $S$ 의 모드에서만 $s_j\ge 1$ 이고 나머지에서 $0$ 인 것을 모두 더하면 클릭 확률이 된다. Gauss 보손 표본추출의 hafnian 공식과 맞추면 다음이 나온다.

$$
\mathrm{Tor}\thinspace B_S=\sum_{s\thinspace:\thinspace s_j\ge 1\thickspace(j\in S)}\frac{\vert\mathrm{haf}\thinspace B_s\vert^2}{s_1!\cdots s_m!}
$$

우변은 무한합이고 좌변은 행렬식 $2^{\vert S\vert}$ 개의 유한합이다.

## 계산

정의대로 계산하면 크기 $N$ 이하의 행렬식 $2^N$ 개가 들어 $O(N^32^N)$ 번의 연산이다. Quesada 등은 토론토니안 계산이 #P-난해임을 보이고, 문턱 검출기를 쓴 Gauss 보손 표본추출도 광자 수를 세는 경우와 같은 꼴의 고전적 어려움을 갖는다고 논증했다[^1].

# 활용

- 문턱 검출기를 쓴 실험의 검증. 광자 수를 세는 검출기는 만들기 어렵다. 문턱 검출기로 한 Gauss 보손 표본추출 실험은 측정한 클릭 배치의 빈도를 클릭 확률 공식의 값과 비교한다.
- 고전 흉내의 비용. 문턱 검출기 실험을 고전 컴퓨터로 정확히 흉내 내는 알고리즘은 클릭 배치마다 토론토니안을 계산하므로, 울린 검출기 수 $N$ 에 대해 $2^N$ 규모의 비용이 기준이 된다.
- 그래프의 부호화. Gauss 보손 표본추출 문서처럼 $B=cA$ 로 그래프를 넣으면, 문턱 검출기의 클릭 배치는 정점 부분집합이고 그 확률이 $\mathrm{Tor}(cA_S)$ 다.

[^1]: N. Quesada, J. M. Arrazola, N. Killoran, Gaussian boson sampling using threshold detectors, *Physical Review A* 98 (2018), 062322.

# 연관 문서

## 선수지식

- [Gauss 보손 표본추출](gaussian-boson-sampling.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #complexity #linear_algebra
