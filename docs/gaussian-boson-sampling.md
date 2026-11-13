# Gauss 보손 표본추출

# 개요

**Gauss 보손 표본추출(Gaussian boson sampling)** 은 광자를 하나씩 넣는 대신 압착된 빛을 광학 회로에 넣고, 각 출구에서 센 광자 수의 분포에서 표본을 뽑는 문제다. [보손 표본추출](boson-sampling.md)에는 광자를 정확히 하나씩 내는 광원이 여러 개 필요한데, 그런 광원은 광자를 정해진 때에 내지 못해 광자 수를 늘리기 어렵다. 압착된 빛은 광자를 언제나 짝수 개씩 내는 광원으로 쉽게 만들어지고, 이것을 회로에 넣으면 출력 확률이 [영구식](permanent.md) 대신 [hafnian](hafnian.md)으로 적혀 같은 꼴의 계산 어려움이 남는다.

# 직관

광자를 짝수 개씩만 내는 광원 두 개를 반투명 거울의 두 입구에 넣는다. 광원 하나는 광자를 $0$ 개, $2$ 개, $4$ 개 내는 확률이 $0.866$, $0.108$, $0.020$ 이고, 두 광원은 같은 세기에 반대 위상이다. 거울을 지난 뒤 두 출구의 광자 수를 센다.

출구 1 에 광자 $2$ 개, 출구 2 에 $0$ 개가 나오는 일은 일어나지 않는다. 출구의 광자 수는 언제나 $(0,0)$, $(1,1)$, $(2,2)$ 처럼 같고, 그 확률은 다음과 같다.

| 출구의 광자 수 | (0,0) | (1,1) | (2,2) | (3,3) |
| --- | --- | --- | --- | --- |
| 확률 | $3/4$ | $3/16$ | $3/64$ | $3/256$ |

각 광원은 광자를 짝으로 내는데, 거울을 지나며 한 짝의 두 광자가 늘 서로 다른 출구로 갈라진다. 광원과 회로가 커지면 어느 출구 배치가 얼마의 확률로 나오는지는 광자를 짝짓는 방법을 모두 더해야 정해지고, 그 합이 hafnian 이다.

# 정의

## 압착 진공

보손 표본추출에서처럼 모드 하나에 광자 $k$ 개가 있는 상태를 $y^k/\sqrt{k!}$ 로 적는다. $0\le t\lt 1$ 에 대해 다음 상태를 매개변수 $t$ 인 **압착 진공(squeezed vacuum)** 이라 한다.

$$
(1-t^2)^{1/4}\exp\Big(\frac{t}{2}y^2\Big)=(1-t^2)^{1/4}\sum\_{k\ge 0}\frac{t^k}{2^kk!}y^{2k}
$$

광자 수는 짝수뿐이고, $2k$ 개일 확률은 $\sqrt{1-t^2}\thinspace t^{2k}(2k)!/(4^k(k!)^2)$ 이다. $t=1/2$ 이면 광자 $0$ 개, $2$ 개, $4$ 개의 확률이 $\sqrt{3}/2\approx 0.866$, $\sqrt 3/16\approx 0.108$, $0.020$ 이고, 직관 절의 광원이 이것이다. 물리에서는 $t=\tanh r$ 로 두고 $r$ 을 압착 매개변수(squeezing parameter)라 한다.

## Gauss 보손 표본추출 문제

모드 $m$ 개에 매개변수 $t\_1,\dots,t\_m$ 인 압착 진공을 넣고 $m\times m$ 유니터리 $U$ 인 선형 광학 회로를 지나게 한 뒤, 모드마다 광자 수 $s\_j$ 를 센다. $t\_j$ 와 $U$ 를 받아 출력 배치 $s=(s\_1,\dots,s\_m)$ 의 분포에서 표본을 뽑는 문제를 **Gauss 보손 표본추출 문제** 라 한다[^1]. 회로가 각 변수를 $y\_i\mapsto\sum\_jU\_{ji}y\_j$ 로 바꾸므로 출력 상태는 다음과 같다.

$$
\prod\_{j=1}^{m}(1-t\_j^2)^{1/4}\cdot\exp\Big(\frac12 y^{\mathsf T}By\Big),\qquad B=U\thinspace\mathrm{diag}(t\_1,\dots,t\_m)\thinspace U^{\mathsf T}
$$

직관 절은 $m=2$, $t\_1=1/2$, $t\_2=-1/2$ 이고 $U$ 가 보손 표본추출의 반투명 거울 행렬인 경우다. 이때 $B=\tfrac12\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 이고 출력 상태는 $\tfrac{\sqrt 3}2\exp(\tfrac12 y\_1y\_2)$ 다. 지수에 $y\_1y\_2$ 만 있으므로 두 출구의 광자 수는 언제나 같다.

# 성질

## 출력 확률의 hafnian 공식

$B$ 에서 $j$ 행과 $j$ 열을 $s\_j$ 번씩 되풀이해 만든 대칭행렬을 $B\_s$ 라 하면

$$
\Pr\lbrack s\rbrack=\prod\_{j=1}^{m}(1-t\_j^2)^{1/2}\cdot\frac{\vert\mathrm{haf}\thinspace B\_s\vert^2}{s\_1!\cdots s\_m!}
$$

이다[^1]. $s\_1+\dots+s\_m$ 이 홀수이면 확률은 $0$ 이다. 위 식의 $\prod(1-t\_j^2)^{1/2}$ 는 물리 표기의 $1/\prod\cosh r\_j$ 와 같다.

증명의 요지. $\exp(\tfrac12 y^{\mathsf T}By)$ 를 전개한 $y\_1^{s\_1}\cdots y\_m^{s\_m}$ 을 본다. $(\tfrac12 y^{\mathsf T}By)^k/k!$ 의 각 항은 $2k$ 개의 변수 자리를 쌍 $k$ 개로 짝짓고 쌍마다 $B$ 의 성분을 곱한 것이므로, 이 단항식의 계수는 $\mathrm{haf}\thinspace B\_s/(s\_1!\cdots s\_m!)$ 이다. 기저 단항식의 크기 $\sqrt{s\_1!\cdots s\_m!}$ 을 곱해 진폭을 얻고 제곱한다.

직관 절에서 $s=(1,1)$ 이면 $B\_s=B$ 이고 $\mathrm{haf}\thinspace B\_s=\tfrac12$ 이므로 확률은 $\tfrac34\cdot\tfrac14=\tfrac3{16}$ 이다. $s=(2,0)$ 이면 $B\_s$ 의 성분이 모두 $B\_{11}=0$ 이어서 확률이 $0$ 이다. 한 모드에서 $t\_1=t$ 이고 $s=(2k)$ 이면 $B\_s$ 의 성분이 모두 $t$ 라 $\mathrm{haf}\thinspace B\_s=(2k-1)(2k-3)\cdots 1\cdot t^k$ 이고, 압착 진공의 확률이 다시 나온다.

## 그래프의 부호화

모든 복소 대칭행렬 $B$ 는 유니터리 $U$ 와 음 아닌 대각행렬 $D$ 로 $B=UDU^{\mathsf T}$ 꼴로 분해된다. 이것을 Takagi 분해(Takagi factorization)라 한다. 그래서 그래프의 인접 행렬 $A$ 에 작은 양수 $c$ 를 곱해 특이값을 $1$ 미만으로 만들면 $B=cA$ 가 되도록 $t\_j$ 와 $U$ 를 고를 수 있다.

출력에서 광자가 모드마다 많아야 하나인 배치 $s$ 는 정점 부분집합 $S$ 와 같다. 이때 $B\_s=cA\_S$ 이고 $\mathrm{haf}\thinspace A\_S$ 는 $S$ 가 유도하는 부분그래프의 완전 [매칭](matchings.md)의 수이므로, 다음이 성립한다.

$$
\Pr\lbrack S\rbrack\propto c^{\vert S\vert}\big(\text{$S$ 가 유도하는 부분그래프의 완전 매칭 수}\big)^2
$$

## 고전적 어려움

보손 표본추출의 Aaronson–Arkhipov 논증을 영구식 대신 hafnian 으로 옮기면, 정확한 Gauss 보손 표본추출을 고전 다항시간에 하면 다항 계층이 무너진다는 같은 꼴의 결론이 나온다[^1]. 근사 표본추출에 대해서는 hafnian 판 두 추측을 가정한다.

광자 수를 세지 못하고 광자가 왔는지만 알리는 검출기를 쓰면 출력 확률은 hafnian 대신 torontonian 이라는 다른 행렬 함수로 적힌다[^2].

# 활용

- 양자 우위 실험. 2020 년 실험은 압착 진공 $50$ 개를 모드 $100$ 개의 회로에 넣고 광자를 최대 $76$ 개까지 검출했다[^3].
- 밀집 부분그래프 찾기. 그래프의 부호화로 표본을 뽑으면 완전 매칭이 많은 부분그래프가 자주 나와, 간선이 많은 부분그래프를 찾는 무작위 탐색의 출발점으로 쓴다[^4].
- 분자의 진동 스펙트럼. 분자가 전자 상태를 바꿀 때 진동 상태 사이의 전이 확률이 같은 꼴의 hafnian 으로 적혀, 광학 회로의 표본으로 스펙트럼을 어림한다[^5].

[^1]: C. S. Hamilton, R. Kruse, L. Sansoni, S. Barkhofen, C. Silberhorn, I. Jex, Gaussian boson sampling, *Physical Review Letters* 119 (2017), 170501.
[^2]: N. Quesada, J. M. Arrazola, N. Killoran, Gaussian boson sampling using threshold detectors, *Physical Review A* 98 (2018), 062322.
[^3]: H.-S. Zhong et al., Quantum computational advantage using photons, *Science* 370 (2020), 1460–1463.
[^4]: J. M. Arrazola, T. R. Bromley, Using Gaussian boson sampling to find dense subgraphs, *Physical Review Letters* 121 (2018), 030503.
[^5]: J. Huh, G. G. Guerreschi, B. Peropadre, J. R. McClean, A. Aspuru-Guzik, Boson sampling for molecular vibronic spectra, *Nature Photonics* 9 (2015), 615–620.

# 연관 문서

## 선수지식

- [보손 표본추출](boson-sampling.md)
- [Hafnian](hafnian.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #complexity #combinatorics
