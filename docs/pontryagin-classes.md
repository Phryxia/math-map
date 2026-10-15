# Pontryagin 류

# 개요

Pontryagin 류는 실 벡터다발의 정수 계수 특성류다. 다발을 복소화해 Chern 류를 취하고 짝수 번째만 부호를 맞춰 남긴다.

$$
p_i(E) \thinspace=\thinspace (-1)^i c_{2i}(E\otimes\mathbb C)
$$

접다발에 적용하면 방향 다양체의 정수 불변량이 나온다. Hirzebruch 부호수 정리의 $L$-류와 지표 정리의 $\hat A$-류가 이 류의 다항식이다.

# 직관

실 벡터다발에 정수 계수 특성류를 두려고 한다. [Stiefel–Whitney 류](stiefel-whitney-classes.md)는 계수가 $\mathbb Z/2$ 라 기본류에 짝지어도 $0$ 과 $1$ 만 나오고, Chern 류는 복소 다발에만 있다. 실 다발에서 Chern 류를 쓰려면 복소 다발을 하나 만들어야 한다.

올마다 $E_x$ 에 $\mathbb C$ 를 텐서하면 복소 벡터공간이 되고, 이것들이 모여 계수가 같은 복소 벡터다발 $E\otimes\mathbb C$ 가 된다. 여기에는 Chern 류 $c_1, c_2, \dots$ 가 있다.

$\mathbb C$ 쪽만 복소수 켤레로 바꾸는 사상이 $E\otimes\mathbb C$ 를 자기 자신의 켤레 다발과 동형으로 만든다. 켤레를 취하면 $j$ 번째 Chern 류가 $(-1)^j$ 배가 되므로 $c_j = (-1)^j c_j$ 이고, $j$ 가 홀수면 $2c_j = 0$ 이다. 홀수 번째 류는 두 배하면 사라지는 원소라 기본류에 짝지어도 유리수 값을 주지 않는다.

남는 것은 짝수 번째 $c_{2i}$ 이고, 부호를 $(-1)^i$ 로 맞춰 적은 것이 $i$ 번째 Pontryagin 류다. $\mathbb{CP}^2$ 의 접다발에서 $p_1 = 3a^2$ 이 나오고 $\langle p_1/3, \lbrack\mathbb{CP}^2\rbrack\rangle = 1$ 이다. 이 수가 [교차형식](intersection-form.md)의 부호수다.

# 정의

## Pontryagin 류

밑공간 $M$ 위의 실 [벡터다발](vector-bundles.md) $E$ 의 $i$ 번째 **Pontryagin 류**는 다음이다.[^1]

$$
p_i(E) \thinspace=\thinspace (-1)^i c_{2i}(E\otimes\mathbb C) \thinspace\in\thinspace H^{4i}(M;\mathbb Z)
$$

$E\otimes\mathbb C$ 는 올마다 $E_x\otimes_{\mathbb R}\mathbb C$ 를 둔 복소 벡터다발이고 $c_j$ 는 그 Chern 류다. $E$ 의 계수가 $r$ 이면 $E\otimes\mathbb C$ 의 복소 계수도 $r$ 이므로 $i\gt \lfloor r/2\rfloor$ 에서 $p_i(E) = 0$ 이다. **전 Pontryagin 류**는 $p(E) = 1 + p_1(E) + \dots + p_{\lfloor r/2\rfloor}(E)$ 다.

다양체 $M$ 의 Pontryagin 류는 접다발의 것을 말하고 $p_i(M) = p_i(TM)$ 으로 쓴다.

## Pontryagin 근

복소 다발 $V$ 를 실 다발로 보면 $V\otimes\mathbb C\cong V\oplus\overline V$ 다. $V$ 의 Chern 근을 $x_1,\dots,x_n$ 이라 하면 오른쪽의 Chern 근은 $\pm x_j$ 이므로

$$
p(V) \thinspace=\thinspace \prod_j (1+x_j^2)
$$

이고 $p_i(V)$ 는 $x_j^2$ 의 $i$ 차 기본대칭식이다. 실 다발 $E$ 에서도 분할 원리로 형식변수 $y_1,\dots,y_m$ 을 두어 $p_i(E)$ 를 그 기본대칭식으로 적는데, 이 $y_j$ 를 **Pontryagin 근**이라 한다.

## Pontryagin 수

$4n$ 차원 닫힌 방향 다양체 $M$ 과 $n$ 의 분할 $I = (i_1,\dots,i_k)$ 에 대해

$$
p_I\lbrack M\rbrack \thinspace=\thinspace \langle p_{i_1}(M)\cdots p_{i_k}(M), \lbrack M\rbrack\rangle \thinspace\in\thinspace \mathbb Z
$$

를 **Pontryagin 수**라 한다. $p_i$ 의 곱은 차수가 $4$ 의 배수이므로 차원이 $4$ 의 배수가 아닌 다양체에는 Pontryagin 수가 없다.

# 성질

## 홀수 Chern 류의 2 꼬임

**정리.** 실 다발 $E$ 에서 $c_j(E\otimes\mathbb C)$ 는 $j$ 가 홀수일 때 $2c_j = 0$ 을 만족한다.

$v\otimes z\mapsto v\otimes\overline z$ 가 $E\otimes\mathbb C$ 에서 그 켤레 다발로 가는 동형이다. 켤레 다발의 Chern 류가 $c_j(\overline F) = (-1)^j c_j(F)$ 이므로 $c_j = (-1)^j c_j$ 이고 홀수 $j$ 에서 $2c_j = 0$ 이다. ∎

그러므로 복소화의 Chern 류에서 유리수 계수로 남는 정보는 짝수 번째뿐이고, Pontryagin 류가 그 정보를 전부 담는다.

## Whitney 곱 공식

**정리.** $p(E\oplus F) - p(E)\thinspace p(F)$ 는 2 꼬임 원소다.

복소화가 직합을 보존하므로 $c(E\otimes\mathbb C)\thinspace c(F\otimes\mathbb C) = c((E\oplus F)\otimes\mathbb C)$ 다. 양변을 차수별로 갈라 짝수 번째만 모으면 좌변에 홀수 번째 류의 곱이 섞여 들어오는데, 그 항들이 위 정리의 2 꼬임이다. ∎

유리수 계수에서는 꼬임이 사라지므로 $p(E\oplus F) = p(E)\thinspace p(F)$ 가 등식이다. 자명한 다발의 전 Pontryagin 류가 $1$ 이므로 $p(E\oplus\varepsilon^k) = p(E)$ 도 따라온다.

## 법 2 환원

**정리.** $p_i(E)$ 의 법 2 환원은 $w_{2i}(E)^2$ 이다.[^1]

복소 다발의 $c_j$ 를 법 2 로 환원하면 밑에 깔린 실 다발의 $w_{2j}$ 가 되므로 $p_i(E)$ 의 환원은 $w_{4i}(E\otimes\mathbb C)$ 다. 실 다발로 보면 $E\otimes\mathbb C\cong E\oplus E$ 이므로 $w(E\otimes\mathbb C) = w(E)^2$ 이고, 법 2 에서 제곱의 교차항이 사라지므로 그 $4i$ 차 성분이 $w_{2i}(E)^2$ 다. ∎

## 복소사영공간의 전 Pontryagin 류

$H^\ast(\mathbb{CP}^n;\mathbb Z) = \mathbb Z\lbrack a\rbrack/(a^{n+1})$ 에서 Euler 열이 $T\mathbb{CP}^n\oplus\mathcal O \cong \mathcal O(1)^{\oplus(n+1)}$ 을 주고, $\mathcal O(1)$ 의 Chern 근은 $a$ 다. 이 코호몰로지 환에는 꼬임이 없으므로 곱 공식이 등식이고, Pontryagin 근 공식에서

$$
p(T\mathbb{CP}^n) \thinspace=\thinspace (1+a^2)^{n+1}
$$

이다. $n=2$ 에서 $p_1 = 3a^2$ 이고 $L_1 = p_1/3 = a^2$ 이라 부호수가 $1$ 이다. $n=4$ 에서 $p_1 = 5a^2$, $p_2 = 10a^4$ 이고 $L_2 = (7p_2 - p_1^2)/45 = a^4$ 이라 역시 부호수가 $1$ 이다.

## 구와 실사영공간

$TS^n\oplus\varepsilon^1$ 이 자명하므로 유리수 계수에서 $p(TS^n) = 1$ 이다. $H^{4i}(S^n;\mathbb Z)$ 에 꼬임이 없으므로 정수 계수에서도 모든 $p_i(TS^n)$ 이 $0$ 이다. 매끄러운 구조가 여럿인 $S^7$ 에서도 이 값들은 같으므로 Pontryagin 류만으로는 그 구조를 가르지 못한다.

$T\mathbb{RP}^n\oplus\varepsilon^1\cong(n+1)\gamma$ 에서 $\gamma$ 는 동어반복 실 선다발이고 $\gamma\otimes\mathbb C$ 는 복소 계수 $1$ 이라 $c_2 = 0$ 이므로 $p(\gamma) = 1$ 이다. 유리수 계수에서 $p(T\mathbb{RP}^n) = 1$ 이다.

## 유리 Pontryagin 류의 위상 불변성

**정리(Novikov).** 두 닫힌 매끄러운 다양체가 위상동형이면 접다발의 유리 Pontryagin 류가 그 동형으로 대응한다.[^2]

Pontryagin 류의 정의는 접다발을 쓰므로 미분구조에 의존해 보이지만, 유리수 계수에서는 위상형만으로 정해진다.

## 방향 코보디즘 환

**정리(Thom).** $4n$ 차원 닫힌 방향 다양체 $M$ 의 모든 Pontryagin 수가 $0$ 인 것과 $\lbrack M\rbrack$ 이 $\Omega^{SO}\_{4n}\otimes\mathbb Q$ 에서 $0$ 인 것이 동치다. 여기서 $\Omega^{SO}\_\ast$ 는 방향 [코보디즘](cobordism.md) 환이다.[^3]

$\Omega^{SO}\_\ast\otimes\mathbb Q$ 는 $\lbrack\mathbb{CP}^{2i}\rbrack$ 들의 다항식환이다. Pontryagin 수가 이 환의 각 차수에서 $\mathbb Q$ 로 가는 선형함수를 전부 주므로, 유리 코보디즘류와 Pontryagin 수의 목록이 같은 자료다. ∎

## L 류와 Â 류

Pontryagin 근 $y_j$ 의 멱급수로 두 류를 정의한다.

$$
L \thinspace=\thinspace \prod_j \frac{\sqrt{y_j}}{\tanh\sqrt{y_j}}, \qquad \hat A \thinspace=\thinspace \prod_j \frac{\sqrt{y_j}/2}{\sinh(\sqrt{y_j}/2)}
$$

두 곱의 각 인자는 $\sqrt{y_j}$ 의 짝수 거듭제곱만 가지므로 $y_j$ 의 멱급수이고, 곱이 $y_j$ 들의 대칭식이므로 전개 결과가 $p_i$ 의 유리계수 다항식이다. 처음 항은 $L_1 = p_1/3$ 과 $\hat A_1 = -p_1/24$ 다.

# 활용

- [Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)가 $4k$ 차원 닫힌 방향 다양체의 부호수를 $\langle L_k, \lbrack M\rbrack\rangle$ 으로 적는다. 이 공식의 우변이 Pontryagin 수의 유리계수 결합이다.
- [지표 정리](index-theorem.md)에서 [Dirac 작용소](dirac-operator.md)의 지표가 $\langle\hat A(M), \lbrack M\rbrack\rangle$ 이다. 좌변이 정수이므로 스핀 다양체의 Pontryagin 수에 정수 조건이 걸린다.
- [이색 구면](exotic-spheres.md)의 구별. $7$ 차원 호모토피 구면이 경계가 되는 $8$ 차원 다양체를 $p_1 = 0$ 이 되도록 잡고 그 부호수를 법 $7$ 로 보면 미분구조의 불변량이 된다.
- [수술 이론](surgery-theory.md)에서 주어진 호모토피형을 실현하는 다양체를 찾을 때 Pontryagin 수가 장애가 된다. $L$-류와 부호수의 관계가 그 조건을 적는 자리다.
- 양의 스칼라 곡률의 장애. Dirac 작용소의 소멸 정리와 지표 공식을 합치면, 스핀 다양체에서 $\langle\hat A(M), \lbrack M\rbrack\rangle\ne 0$ 이면 스칼라 곡률이 양인 계량이 없다.

[^1]: J. W. Milnor and J. D. Stasheff, *Characteristic Classes*, Annals of Mathematics Studies 76, Princeton University Press (1974), §15. 복소화로 Pontryagin 류를 정의하는 구성, 전 Pontryagin 류의 곱셈성이 2 꼬임을 남기는 것, $\mathbb{CP}^n$ 의 계산, 법 2 환원이 $w_{2i}^2$ 인 것이 이 절에 있다.

[^2]: S. P. Novikov, "Topological invariance of rational Pontrjagin classes", *Doklady Akademii Nauk SSSR* 163 (1965), 298–300. 유리 Pontryagin 류가 위상동형으로 보존됨을 보인다.

[^3]: R. Thom, "Quelques propriétés globales des variétés différentiables", *Commentarii Mathematici Helvetici* 28 (1954), 17–86. 방향 코보디즘 환에 유리수를 텐서한 것의 구조와 Pontryagin 수가 그 환을 가르는 것이 이 논문의 내용이다.

# 연관 문서

## 선수지식

- [특성류](characteristic-classes.md)

## 더 알아보기

- [곱셈적 종수](multiplicative-genera.md)
- [Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)

#algebraic_topology #topology #differential_geometry
