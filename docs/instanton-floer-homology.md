# 순간자 Floer 호몰로지

# 개요

**순간자 Floer 호몰로지(instanton Floer homology)** 는 [호몰로지](homology.md) 3 구 위의 기약 $\mathrm{SU}(2)$ 평탄 접속을 생성원으로 두고 그 사이의 순간자를 세어 경계 사상을 정한 사슬 복합체의 호몰로지다. [Casson 불변량](casson-invariant.md)은 이런 평탄 접속을 부호와 함께 센 정수 하나라서, 두 3 다양체에서 값이 같으면 그 이상 가를 수 없다. 순간자 Floer 호몰로지는 그 정수를 Euler 지표로 갖는 아벨군들의 열을 만들어 정수 대신 군을 비교하게 하고, 4 차원 코보디즘을 군 사이의 준동형으로 바꾼다.

# 직관

Casson 불변량은 호몰로지 3 구 $\Sigma$ 위의 기약 $\mathrm{SU}(2)$ 평탄 접속을 부호와 함께 센 정수다.

$$
\lambda(\Sigma)=\sum_{\alpha\in R^\ast(\Sigma)}\pm1
$$

Poincaré 구면 $\Sigma(2,3,5)$ 에서는 평탄 접속이 둘이고 $\lambda=-1$ 이다. 유한집합의 원소에 $\pm1$ 을 붙여 더한 수는 그 원소들을 생성원으로 하는 사슬 복합체의 [Euler 지표](euler-characteristic.md)의 꼴이다. 그런 복합체의 미분을 정하려면 두 생성원 사이를 잇는 무언가를 세야 한다.

유한차원 [Morse 이론](morse-theory.md)의 Morse 호몰로지는 함수 $f$ 의 임계점을 생성원으로 놓고, 지표 차이가 $1$ 인 두 임계점을 잇는 기울기 흐름선을 세어 미분을 정의한다. Floer 는 이 절차를 $\Sigma$ 위 $\mathrm{SU}(2)$ 접속들의 공간을 게이지군으로 나눈 것에 쓰고, 함수로 [Chern–Simons](chern-simons.md) 범함수를 썼다. $\delta\mathrm{CS}=0$ 은 곡률 $F_A=0$ 과 같으므로 임계점은 평탄 접속, 곧 Casson 불변량이 세던 대상이다. $\mathbb R\times\Sigma$ 위에서 기울기 흐름 방정식을 풀어 쓰면 4 차원의 반자기쌍대 방정식 $F^+=0$ 이 되므로 흐름선은 순간자(instanton)다.

| 유한차원 Morse | 순간자 Floer |
|---|---|
| [다양체](manifolds.md) $M$ | 접속공간 $\mathcal A/\mathcal G$ |
| 함수 $f$ | Chern–Simons 범함수 |
| 임계점 | 평탄 접속, 곧 $\pi_1\Sigma\to \mathrm{SU}(2)$ 표현 |
| 기울기 흐름선 | $\mathbb R\times\Sigma$ 위의 순간자 |
| Morse 지표 | 스펙트럼 흐름 (mod 8) |

# 정의

## Chern–Simons 범함수

$\Sigma$ 위의 $\mathrm{SU}(2)$ 접속 $A$ 에 대해 다음을 **Chern–Simons 범함수(Chern–Simons functional)** 라 한다.

$$
\mathrm{CS}(A)=\frac1{8\pi^2}\int_\Sigma\mathrm{tr}\Big(A\wedge dA+\tfrac23A\wedge A\wedge A\Big)
$$

평탄 접속 $A=0$ 에서 $\mathrm{CS}(0)=0$ 이다.

## 사슬 복합체

$\Sigma$ 를 정수 호몰로지 3 구로 둔다. 생성원은 $R^\ast(\Sigma)=\lbrace\rho:\pi_1\Sigma\to \mathrm{SU}(2)\thinspace\text{기약}\rbrace/\text{켤레}$ 의 원소이고, 모두 비퇴화라고 가정한다. 비퇴화가 아니면 홀로노미 섭동(holonomy perturbation)으로 비퇴화하게 만든다. $\Sigma(2,3,5)$ 에서는 $R^\ast$ 가 원소 둘이다.

$\alpha,\beta$ 사이의 **상대 등급(relative grading)** $\mu(\alpha,\beta)\in\mathbb Z/8$ 은 둘을 잇는 접속의 경로를 따라가는 [자기수반 작용소](unbounded-operators.md)족의 **스펙트럼 흐름(spectral flow)**, 곧 고윳값이 $0$ 을 지나며 부호를 바꾸는 횟수의 부호 합을 $8$ 로 나눈 나머지다.

$\mathcal M(\alpha,\beta)$ 를 $\mathbb R\times\Sigma$ 위에서 양끝이 $\alpha,\beta$ 로 수렴하는 순간자들의 모듈라이 공간으로 둔다. $\mu(\alpha,\beta)=1$ 이면 $\mathbb R$ 의 평행이동으로 나눈 $\mathcal M(\alpha,\beta)$ 는 $0$ 차원 콤팩트이고, 미분을 다음으로 둔다. 개수는 방향을 준 부호 합이다.

$$
\partial\alpha=\sum_{\mu(\alpha,\beta)=1}\char35{}\bigl(\mathcal M(\alpha,\beta)/\mathbb R\bigr)\thickspace\beta
$$

이 복합체의 호몰로지 $HF_\ast(\Sigma)=H_\ast(C_\ast,\partial)$, $\ast\in\mathbb Z/8$ 을 $\Sigma$ 의 **순간자 Floer 호몰로지** 라 한다.

# 성질

## 잘 정의됨

$\mathrm{CS}(g\cdot A)=\mathrm{CS}(A)+\deg g$ 이고 $\deg g\in\mathbb Z$ 이므로 $\mathrm{CS}$ 는 $\mathcal A/\mathcal G$ 위에서 $\mathbb R/\mathbb Z$ 값 함수다. 그래서 절대 등급은 없고 두 임계점 사이의 상대 등급만 남는다. 반자기쌍대 작용소의 지표는 순간자 수 $k$ 에 대해 $8k-3(1+b^+)$ 꼴이라 감김수 $1$ 의 게이지 변환이 지표를 $8$ 만큼 바꾸고, 상대 등급이 $\mathbb Z/8$ 값이 된다.

$\partial^2=0$ 은 $\mu=2$ 인 1 차원 모듈라이 공간의 끝을 세어 나온다. 그 끝은 두 번 꺾인 흐름선들이고, 1 차원 콤팩트 다양체의 경계점은 부호 합이 $0$ 이다. 이 논법은 Morse 이론과 같고, 모듈라이의 [콤팩트성](compactness.md)을 확보하는 기포 현상(bubbling) 처리가 해석학적 부분이다. $HF_\ast(\Sigma)$ 는 섭동과 계량의 선택에 의존하지 않는다.

## Euler 지표와 Casson 불변량

Taubes 정리(Taubes' theorem)는 다음이다.

$$
\chi\big(HF_\ast(\Sigma)\big)=\sum_{i\in\mathbb Z/8}(-1)^i\thinspace\mathrm{rank}\thinspace HF_i(\Sigma)=2\thinspace\lambda(\Sigma)
$$

$8$ 이 짝수이므로 $\mathbb Z/8$ 등급에서 $(-1)^i$ 가 정의된다. 우변의 $2$ 는 $\lambda(\Sigma(2,3,5))=-1$ 로 정한 Casson 불변량의 정규화에서 온다.

Poincaré 구면 $\Sigma(2,3,5)$ 의 [기본군](fundamental-group.md)은 위수 $120$ 의 이진 정이십면체군이고 기약 2 차원 $\mathrm{SU}(2)$ 표현이 둘이다. 사슬군이 $\mathbb Z^2$ 이고 두 생성원의 등급이 $1$ 과 $5$ 라 차이가 짝수이므로 미분이 $0$ 이다.

$$
HF_i\big(\Sigma(2,3,5)\big)=\begin{cases}\mathbb Z,& i=1,5\cr 0&\text{그 밖}\end{cases}
\qquad\chi=-2=2\cdot(-1)
$$

## 함자성

호몰로지 3 구 $\Sigma_0,\Sigma_1$ 사이의 4 차원 코보디즘 $W$ 는 준동형 $\Phi_W:HF_\ast(\Sigma_0)\to HF_{\ast+d}(\Sigma_1)$ 을 유도하고, 코보디즘을 이어 붙이면 준동형이 합성된다. 그래서 경계가 있는 4 다양체의 [Donaldson 불변량](donaldson-invariants.md)은 수가 아니라 경계의 Floer 군의 원소이고, 4 다양체를 둘로 자르면 두 조각이 주는 원소의 짝이 전체의 불변량이다. 이 구조는 [위상 양자장론](topological-quantum-field-theory.md)의 공리를 만족한다.

## 수술 완전 삼각형

매듭 $K\subset\Sigma$ 를 따라 기울기를 바꿔 가며 수술하면 세 다양체 $\Sigma_0,\Sigma_1,\Sigma_\infty$ 가 나오고 그 Floer 군이 다음 긴 완전열을 이룬다.

$$
\cdots\to HF_\ast(\Sigma_0)\to HF_\ast(\Sigma_1)\to HF_\ast(\Sigma_\infty)\to HF_{\ast-1}(\Sigma_0)\to\cdots
$$

[Heegaard Floer 호몰로지](heegaard-floer-homology.md)의 수술 완전 삼각형과 [Khovanov 호몰로지](khovanov-homology.md)의 skein 완전열이 같은 꼴이다.

## 호몰로지 코보디즘 군

Casson 불변량이 $0$ 이어도 Floer 군은 $0$ 이 아닐 수 있다. Furuta 와 Fintushel–Stern 은 Brieskorn 구면 위의 순간자 모듈라이 공간으로 호몰로지 코보디즘 군(homology cobordism group) $\Theta^3_{\mathbb Z}$ 가 $\mathbb Z^\infty$ 를 부분군으로 가짐을 보였다. Frøyshov 는 순간자 Floer 호몰로지로 준동형 $h\colon\Theta^3_{\mathbb Z}\to\mathbb Z$ 를 만들었다.

# 활용

## Brieskorn 구면의 생성원

Brieskorn 구면(Brieskorn sphere) $\Sigma(p,q,r)$ 에서는 생성원 목록을 표현론으로 쓸 수 있다. 기본군은 다음이고, $\mathrm{SU}(2)$ 기약 표현에서 중심원소 $c=x^p$ 는 $\pm1$ 로 간다.

$$
\pi_1\Sigma(p,q,r)=\langle x,y,z\mid x^p=y^q=z^r=xyz\rangle
$$

$\Sigma(2,3,5)$ 에서 $c=-1$ 이면 각 생성원의 대각합이 고정된다.

| 원소 | 관계 | 고윳값 | 대각합 |
|---|---|---|---|
| $x$ | $x^2=-1$ | $\pm i$ | $0$ |
| $y$ | $y^3=-1$ | $e^{\pm i\pi/3}$ | $1$ |
| $z$ | $z^5=-1$ | $e^{\pm i\pi k/5}$ 에서 $k=1,3$ | $2\cos(\pi k/5)$ |

$k=5$ 이면 $z=-1$ 이 되어 표현이 가약이므로 제외한다. $k=1,3$ 각각에 대해 $xyz=-1$ 조건이 세 회전축의 상대 각도를 정하고, 구면 삼각부등식을 만족하는 배치가 켤레를 빼고 하나씩 있으므로 생성원이 둘이다. $c=+1$ 이면 표현이 $\pi_1$ 의 몫인 정이십면체군 $A_5$ 를 거쳐야 하는데 $A_5$ 에는 2 차원 기약표현이 없으므로 생성원이 더 없다.

## 다른 Floer 이론

미분을 구하려면 4 차원 편미분방정식의 해를 세고 모듈라이의 콤팩트성과 방향을 확인해야 하므로, Poincaré 구면처럼 등급 때문에 미분이 $0$ 이 되는 경우가 아니면 손으로 계산하기 어렵다.

- Heegaard Floer 호몰로지. 순간자 대신 대칭곱 안의 정칙 원판을 세고 조합적 계산법이 있다. Heegaard Floer 호몰로지와 동형인 것은 Seiberg–Witten Floer 호몰로지다.
- 동변(equivariant) 판본. 기약 접속만 세면 자명한 접속이 담는 정보가 빠지므로, 그것까지 포함한 판본에서 Frøyshov 불변량이 정의된다. Kronheimer–Mrowka 는 매듭의 순간자 호몰로지를 정의하고, Khovanov 호몰로지가 풀린 매듭을 판별한다는 정리를 증명했다.

# 연관 문서

## 선수지식

- [Casson 불변량](casson-invariant.md)
- [Morse 이론](morse-theory.md)
- [Yang–Mills 이론](yang-mills-theory.md)

## 더 알아보기

- [Heegaard Floer 호몰로지](heegaard-floer-homology.md)

#algebraic_topology #topology #differential_geometry
