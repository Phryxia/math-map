# p 진 높이

# 개요

[Néron–Tate 높이](canonical-height.md)는 타원곡선의 유리점에 실수를 붙이고, 생성원들의 높이쌍 행렬식이 [BSD 추측](birch-swinnerton-dyer.md)(Birch–Swinnerton-Dyer)의 선행계수에 들어가는 조절자다.

**$p$ 진 높이**는 같은 점에 $\mathbb Q_p$ 의 원소를 붙이는 쌍선형 형식이다. [$p$ 진 $L$ 함수](p-adic-l-function.md)의 값이 $\mathbb Q_p$ 에 있으므로 그 선행계수와 견줄 조절자도 $\mathbb Q_p$ 값이어야 한다. 정준 높이의 국소 분해에서 실수 로그를 $p$ 진 로그로 바꾸고, $p$ 자리의 항은 [Coleman 적분](coleman-integration.md)으로 정한다.

# 직관

BSD 추측의 선행계수 등식은 좌변에 $L$ 함수의 $r$ 계 도함수를, 우변에 조절자 $\mathrm{Reg}\_E=\det(\langle P_i,P_j\rangle)$ 를 놓는다. $p$ 진 $L$ 함수 $L_p(E,s)$ 로 같은 등식을 쓰려고 하면 좌변은 $\mathbb Q_p$ 의 원소이고 우변은 실수다. 두 값을 같다고 놓을 자리가 없다.

정준 높이를 $\mathbb Q_p$ 에서 다시 읽어 본다. $x$ 좌표를 기약분수 $a/b$ 로 쓴 $h(P)=\log\max(\vert a\vert,\vert b\vert)$ 의 로그는 실수이고 $\mathbb Q_p$ 의 원소가 아니다. 로그를 떼고 $\max(\vert a\vert,\vert b\vert)$ 를 $\mathbb Q_p$ 의 원소로 보아도 Tate 의 극한이 막힌다. $4^{-n}h(2^nP)$ 에서 $4^{-n}$ 은 $p\ne 2$ 일 때 $p$ 진 절댓값이 $1$ 이라 항이 작아지지 않고 수열이 수렴하지 않는다.

막힌 것은 실수 로그와 그 극한이므로 국소 분해 $\hat h(P)=\sum_v\lambda_v(P)$ 로 돌아간다. $p$ 를 나누지 않는 유한 자리에서 $\lambda_v(P)$ 는 환원의 성분에서 읽는 유리수에 $\log q_v$ 를 곱한 값이고, $q_v$ 는 잉여체의 크기다. 여기서 $\log q_v$ 를 $p$ 진 로그 $\log_p q_v$ 로 바꾸면 그 항이 $\mathbb Q_p$ 에 온다.

남는 자리가 둘이다. 아르키메데스 자리에서는 $\mathbb R^\ast$ 에서 $\mathbb Q_p$ 로 가는 연속 준동형이 자명하므로 항이 아예 없다. $v=p$ 에서 실수 쪽은 타원 로그와 Weierstrass $\sigma$ 함수를 쓰는데, 그 자리에 $p$ 진 적분이 들어간다. 인자 $D_1$ 에 잔차를 갖는 미분형식 $\omega_{D_1}$ 을 잡고 인자 $D_2$ 의 점들을 따라 Coleman 적분하면 값이 $\mathbb Q_p$ 에 나온다.

자리마다의 값을 더한 것이 $p$ 진 높이쌍이고, 생성원들에 대한 그 행렬식이 $p$ 진 조절자다.

# 정의

## Iwasawa 로그

$$
\log_p(1+x)=\sum_{n\ge1}\frac{(-1)^{n-1}x^n}{n}\qquad(x\in p\mathbb Z_p)
$$

이 급수는 $x\in p\mathbb Z_p$ 에서 수렴한다. $u\in\mathbb Z_p^\ast$ 에는 $u^{p-1}\in 1+p\mathbb Z_p$ 를 써서 $\log_p u=\frac{1}{p-1}\log_p(u^{p-1})$ 로, $\mathbb Q_p^\ast$ 에는 $\log_p p=0$ 으로 확장한다. 이 확장이 **Iwasawa 로그**다.

높이쌍은 이데일 유군 $\mathbb Q^\ast\_{\mathbb A}/\mathbb Q^\ast$ 에서 $\mathbb Q_p$ 로 가는 연속 준동형 $\ell$ 하나를 자료로 받는다. $\mathbb Q$ 위에서 이런 준동형은 상수배를 빼면 하나이고, 순환체의 Galois 군을 거쳐 $\log_p$ 로 가는 것이 그것이다.

## 국소 높이

$C$ 가 $\mathbb Q$ 위의 종수 $g$ 인 곡선이고 $p$ 에서 좋은 환원을 갖는다. $D_1,D_2$ 는 지지가 서로소인 차수 $0$ 인자다. 자리마다 다음을 둔다.

- $v\nmid p$ 인 유한 자리: $h_v(D_1,D_2)=i_v(D_1,D_2)\log_p q_v$ 다. $i_v$ 는 $v$ 에서의 모델 위에서 두 인자가 갖는 교차수이고 $q_v$ 는 잉여체의 크기다.
- $v=p$: 잔차가 $\mathrm{Res}\thinspace\omega\_{D_1}=D_1$ 이고 de Rham 클래스가 정해진 부분공간 $W$ 에 놓이는 3종 미분형식 $\omega\_{D_1}$ 을 잡아 $h_p(D_1,D_2)=\int_{D_2}\omega\_{D_1}$ 로 둔다. 적분은 Coleman 적분이고 $D_2=\sum_i n_i(Q_i)$ 에 대해 $\int_{D_2}=\sum_i n_i\int^{Q_i}$ 다.
- 아르키메데스 자리: 항이 없다.

$W$ 는 $H^1\_{\mathrm{dR}}(C)$ 에서 정칙 형식의 공간에 대한 상보 부분공간이고, 이 선택이 높이쌍을 결정한다. 좋은 순서 환원에서는 Frobenius 의 고윳값이 $p$ 진 단위인 부분공간, 곧 **단위근 부분공간**으로 잡는다.

## 전역 높이쌍과 p 진 조절자

$$
h_p(D_1,D_2)=\sum_v h_v(D_1,D_2)
$$

를 **$p$ 진 높이쌍**이라 한다. 유한 개의 자리에서만 항이 $0$ 이 아니고, 값은 두 인자의 선형동치류에만 의존한다. 그러므로 이 쌍은 [Jacobi 다양체](jacobian-variety.md) 위의 쌍선형 대칭형식 $\langle\cdot,\cdot\rangle_p$ 을 준다. 지지가 겹치는 두 인자에는 선형동치인 인자로 옮겨 값을 매긴다.

타원곡선에서 $h_p(P)=\langle P,P\rangle_p$ 를 점 $P$ 의 **$p$ 진 높이**라 하고, 생성원 $P_1,\dots,P_r$ 에 대해

$$
R_p(E)=\det\bigl(\langle P_i,P_j\rangle_p\bigr)\_{1\le i,j\le r}
$$

을 **$p$ 진 조절자**라 한다.[^1]

# 성질

## 이차형식

$\langle\cdot,\cdot\rangle_p$ 는 쌍선형이고 $h_p(nP)=n^2h_p(P)$ 다.

*증명의 요지.* 국소 항마다 확인한다. 교차수 $i_v$ 는 두 인자에 대해 쌍선형이고, Coleman 적분은 미분형식과 적분 구간 양쪽에 가법적이므로 $h_p(D_1,D_2)$ 도 그렇다. 값이 선형동치류에만 의존하므로 점을 더하는 연산과 인자를 더하는 연산이 맞물린다. ∎

## 아르키메데스 항의 소멸

$\mathbb R\_{\gt 0}$ 은 연결이고 나눌 수 있는 군이며 $\mathbb Q_p$ 는 완전 비연결이므로 $\mathbb R^\ast\to\mathbb Q_p$ 인 연속 준동형은 자명하다. 그래서 $p$ 진 높이에는 실주기 $\Omega_E$ 에 대응하는 인자가 없다. 그 자리에는 Frobenius 고윳값으로 적는 $p$ 진 오일러 인자가 온다.

## Schneider 의 비퇴화 추측

고전 높이쌍은 $E(\mathbb Q)\otimes\mathbb R$ 에서 양정치이고 비퇴화가 거기서 따라온다. $\mathbb Q_p$ 는 순서체가 아니므로 양정치를 말할 수 없고 비퇴화를 따로 물어야 한다. Schneider 는 $\langle\cdot,\cdot\rangle_p$ 가 $E(\mathbb Q)\otimes\mathbb Q_p$ 에서 비퇴화라고 추측했다.[^2]

## 계산

$v=p$ 항은 [Kedlaya 알고리즘](kedlaya-algorithm.md)으로 구한 Frobenius 행렬에서 Coleman 적분을 얻어 계산하고, 나머지 자리의 항은 각 나쁜 자리의 모델에서 교차수를 읽어 구한다. 좋은 순서 환원을 갖는 타원곡선에서는 $p$ 진 $\sigma$ 함수의 멱급수로도 같은 값이 나온다.

# 활용

- **$p$ 진 BSD 추측.** Mazur, Tate, Teitelbaum 은 $p$ 에서 좋은 순서 환원을 갖는 $E$ 에 대해 $L_p(E,s)$ 가 $s=1$ 에서 계수 $r$ 만큼 소멸하고, 그 선행계수가 고전 BSD 우변에서 실수 조절자를 $R_p(E)$ 로 바꾸고 실주기를 Frobenius 단위근의 오일러 인자로 바꾼 꼴이라고 추측했다.[^3] 이 진술이 $R_p(E)\ne 0$ 을 요구하고, 그것이 Schneider 추측이다.
- **[이차 Chabauty](chabauty-kim.md).** 전역 높이 $h_p$ 는 이차형식이고 동시에 국소 항의 합이다. $v=p$ 항은 반복 Coleman 적분으로 적히고 나머지 자리의 항은 유한 개의 값만 갖는다. 두 표현을 견주면 유리점이 만족하는 방정식이 나오고, [Chabauty 방법](chabauty-method.md)의 계수 조건이 $r\lt g+s-1$ 로 느슨해진다.[^4]
- **Iwasawa 이론.** [Iwasawa 주추측](iwasawa-main-conjecture.md)의 타원곡선 판에서 $p$ 진 BSD 추측이 따라 나오고, 그 선행계수가 $R_p(E)$ 를 담는다. Selmer 군의 확장류로 같은 쌍을 얻는 구성도 있다.

[^1]: R. Coleman, B. Gross, "$p$-adic heights on curves", in *Algebraic Number Theory — in honor of K. Iwasawa*, Adv. Stud. Pure Math. **17** (1989), 73–81. 국소 항의 정의와 선형동치류 의존성이 여기 있다.
[^2]: P. Schneider, "$p$-adic height pairings I", *Invent. Math.* **69** (1982), 401–409. 비퇴화 추측은 같은 논문의 마지막 절이다.
[^3]: B. Mazur, J. Tate, J. Teitelbaum, "On $p$-adic analogues of the conjectures of Birch and Swinnerton-Dyer", *Invent. Math.* **84** (1986), 1–48.
[^4]: J. Balakrishnan, N. Dogra, "Quadratic Chabauty and rational points I: $p$-adic heights", *Duke Math. J.* **167** (2018), 1981–2038.

# 연관 문서

## 선수지식

- [Néron–Tate 높이와 Mordell–Weil 정리](canonical-height.md)
- [Coleman 적분](coleman-integration.md)

## 더 알아보기

- [Chabauty–Kim 방법](chabauty-kim.md)

#number_theory #algebra #computation
