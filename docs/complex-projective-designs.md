# 복소 사영 설계

# 개요

**복소 사영 t-설계(complex projective t-design)** 는 모든 순수 상태에 대해 평균을 내야 하는 양을 유한 개의 상태에 대한 평균으로 바꿔 주는 상태들의 모임이다. 큐비트를 잡음이 있는 통로로 보낼 때 입력 상태가 얼마나 보존되는지를 모든 입력 상태에 대해 평균 내려면 Bloch 구면 위에서 적분해야 한다. 2-설계를 이루는 상태 몇 개만 보내 평균을 내면 그 적분값이 그대로 나온다.

# 직관

큐비트를 확률 $p$ 로 $X$ 가 걸리는 통로로 보낸다. 입력이 Bloch 벡터 $(x,y,z)$ 인 순수 상태 $\psi$ 이면 출력은 $(1-p)\psi\psi^\ast+pX\psi\psi^\ast X$ 이고, 출력이 입력과 같다고 판정될 확률은 다음과 같다.

$$
F(\psi)=(1-p)+p\thinspace\vert\langle\psi,X\psi\rangle\vert^2=(1-p)+px^2
$$

구면 위의 고른 평균에서 $x^2$ 의 평균은 $\tfrac13$ 이므로 이 확률의 평균, 곧 평균 충실도(average fidelity)는 $1-\tfrac23p$ 다. 이 값을 실험으로 얻으려 할 때 입력을 $\vert 0\rangle,\vert 1\rangle$ 두 개로만 고르면 둘 다 $x=0$ 이라 평균이 $1$ 로 나와 틀린다.

입력을 [대칭 정보 완전 측정](sic-povm.md)의 정사면체 네 상태로 고르면 네 점 모두 $x^2=\tfrac13$ 이라 평균이 맞는다. 상호 편향 없는 세 기저의 여섯 상태로 고르면 $x^2$ 가 $1,1,0,0,0,0$ 이라 평균이 역시 $\tfrac13$ 이다. 두 경우 모두 Bloch 좌표의 이차식의 평균이 구면 평균과 같다. 이런 상태 모임을 2-설계라 한다.

# 정의

## 대칭 부분공간

$(\mathbb C^d)^{\otimes t}$ 에서 텐서 인자의 순서를 바꿔도 변하지 않는 벡터의 부분공간을 **대칭 부분공간(symmetric subspace)** 이라 하고, 그 위로의 정사영을 $\Pi\_{\mathrm{sym}}^{(t)}$ 로 적는다. 차원은 $D\_t=\binom{d+t-1}t$ 다. $d=2$, $t=2$ 이면 $\vert 00\rangle$, $\vert 11\rangle$, $\vert 01\rangle+\vert 10\rangle$ 이 펼치는 3 차원 공간이다.

## t-설계

$\mathbb C^d$ 의 단위 벡터 $\psi\_1,\dots,\psi\_N$ 이 다음을 만족하면 이 모임을 복소 사영 t-설계라 한다.

$$
\frac1N\sum_{k=1}^N(\psi_k\psi_k^\ast)^{\otimes t}=\int(\psi\psi^\ast)^{\otimes t}\thinspace d\psi=\frac1{D_t}\Pi^{(t)}\_{\mathrm{sym}}
$$

적분은 단위 구면 위의 유니터리 불변 확률측도에 대한 것이고, 둘째 등호는 대칭 부분공간 위에서 유니터리 군이 기약으로 작용하는 데서 나온다. 성분으로 쓰면 $\psi$ 의 성분에 대해 $t$ 차, 켤레 성분에 대해 $t$ 차인 모든 다항식의 평균이 구면 평균과 같다는 조건이다.

$t=1$ 이면 조건은 $\tfrac1N\sum\_k\psi\_k\psi\_k^\ast=\tfrac1dI$ 이고, 정규직교 기저 하나가 1-설계다. 직관 절의 네 상태와 여섯 상태는 2-설계이고, $\vert 0\rangle,\vert 1\rangle$ 은 1-설계이지만 2-설계가 아니다.

# 성질

## 틀 퍼텐셜의 하한

정리. 단위 벡터 $N$ 개에 대해 다음이 성립하고, 등호는 t-설계일 때와 그때만 성립한다[^1].

$$
\sum_{j,k=1}^N\vert\langle\psi_j,\psi_k\rangle\vert^{2t}\ge\frac{N^2}{D_t}
$$

좌변을 **틀 퍼텐셜(frame potential)** 이라 한다.

증명의 요지. $S=\sum\_k(\psi\_k\psi\_k^\ast)^{\otimes t}$ 는 대칭 부분공간 위의 양의 반정부호 행렬이고 $\mathrm{tr}\thinspace S=N$, $\mathrm{tr}\thinspace S^2$ 은 좌변이다. 고윳값 $D\_t$ 개에 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓰면 $\mathrm{tr}\thinspace S^2\ge N^2/D\_t$ 이고, 등호는 $S$ 가 $\Pi\_{\mathrm{sym}}^{(t)}$ 의 상수배일 때다. $t=1$ 이면 [Welch 상한](welch-bound.md)의 증명에 쓴 부등식이다.

## 대칭 정보 완전 측정과 상호 편향 없는 기저

대칭 정보 완전 측정의 벡터 $d^2$ 개는 2-설계다[^2]. 틀 퍼텐셜은 대각항 $d^2$ 과 나머지 $d^2(d^2-1)$ 항의 $(d+1)^{-2}$ 을 더해 다음과 같고, 이것이 $N^2/D\_2=d^4\cdot\tfrac2{d(d+1)}$ 과 같다.

$$
d^2+\frac{d^2(d^2-1)}{(d+1)^2}=\frac{2d^3}{d+1}
$$

[상호 편향 없는 기저](mutually-unbiased-bases.md)의 완전한 모임의 벡터 $d(d+1)$ 개도 2-설계다[^3]. 벡터 하나마다 자기 자신이 $1$, 같은 기저의 다른 벡터가 $0$, 다른 기저 $d$ 개의 벡터 $d^2$ 개가 각각 $d^{-2}$ 를 더해 $2$ 이므로 틀 퍼텐셜은 $2d(d+1)$ 이고 $N^2/D\_2$ 와 같다.

## 2-설계의 크기

2-설계는 정보 완전하다. 대칭 부분공간 위로의 정사영의 부분 대각합 공식으로 다음이 나오고, 확률 $\mathrm{tr}(\psi\_k\psi\_k^\ast\rho)$ 들에서 $\rho$ 가 정해진다.

$$
\sum_{k=1}^N\mathrm{tr}(\psi_k\psi_k^\ast\rho)\thinspace\psi_k\psi_k^\ast=\frac N{d(d+1)}\bigl(\rho+I\bigr)
$$

그래서 행렬 $\psi\_k\psi\_k^\ast$ 들이 Hermite 행렬(Hermitian matrix)의 공간을 펼쳐야 하고 $N\ge d^2$ 이다. 등호는 대칭 정보 완전 측정일 때와 그때만 성립한다[^2]. 대칭 정보 완전 측정에서 위 식을 $\rho$ 에 대해 풀면 그 문서의 상태 복원 공식이 나온다.

## 존재

모든 $d$ 와 $t$ 에서 유한한 복소 사영 t-설계가 있다[^4]. 큐비트에서 t-설계는 Bloch 구면의 점 모임으로서 $t$ 차 이하 다항식의 평균이 구면 평균과 같은 것, 곧 [구면 t-설계](spherical-designs.md)와 같다. 정사면체는 구면 2-설계이고 정팔면체는 구면 3-설계다.

# 활용

- 평균 충실도. [양자 채널](quantum-channels.md)의 입력 상태 평균 충실도는 입력에 대해 이차식이므로 2-설계의 상태만 보내 계산한다. 직관 절의 계산이 이 경우다.
- 상태 단층 촬영(quantum state tomography). 2-설계의 상태들로 측정하면 위의 부분 대각합 공식을 풀어 밀도 행렬을 얻는다.
- 유니터리 설계(unitary design). 상태 대신 유니터리 행렬의 유한 모임으로 [Haar 측도](haar-measure.md) 평균을 바꾸는 것이다. Clifford 군은 유니터리 2-설계이고, 게이트 오류율을 재는 무작위 벤치마킹(randomized benchmarking)이 이것을 쓴다.

[^1]: A. J. Scott, "Tight informationally complete quantum measurements", *Journal of Physics A* 39 (2006), 13507–13530.
[^2]: J. M. Renes, R. Blume-Kohout, A. J. Scott, C. M. Caves, "Symmetric informationally complete quantum measurements", *Journal of Mathematical Physics* 45 (2004), 2171–2180.
[^3]: A. Klappenecker, M. Rötteler, "Mutually unbiased bases are complex projective 2-designs", *Proceedings of the IEEE International Symposium on Information Theory* (2005), 1740–1744.
[^4]: P. D. Seymour, T. Zaslavsky, "Averaging sets: a generalization of mean values and spherical designs", *Advances in Mathematics* 52 (1984), 213–240.

# 연관 문서

## 선수지식

- [대칭 정보 완전 측정](sic-povm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #linear_algebra #combinatorics #information_theory
