# Furuta 10/8 정리

# 개요

**Furuta 10/8 정리(Furuta's 10/8 theorem)** 는 닫힌 매끄러운 4 차원 스핀 다양체의 둘째 Betti 수가 부호수의 $10/8$ 배보다 $2$ 이상 크다는 정리다. 부호수가 $-16$ 인 짝수 교차형식은 $E_8$ 의 부호를 바꾼 것 둘에 쌍곡형 $H$ 를 몇 개 더한 꼴이고, 위상다양체로는 $H$ 가 몇 개이든 모두 만들어진다. 이 정리는 그 가운데 매끄러운 다양체에서 나올 수 있는 것을 $H$ 가 셋 이상인 것으로 좁힌다.

# 직관

[Rokhlin 정리](rokhlin-theorem.md)의 직관 절에서처럼 닫힌 단연결 4 차원 다양체의 [교차형식](intersection-form.md)이 부정부호인 짝수형이면, 대수만으로 그 형식은 $E_8$ 을 $\pm$ 부호로 $k$ 개, $H$ 를 $m$ 개 더한 꼴이다. 부호수는 $\pm 8k$ 이고 둘째 Betti 수는 $b_2=8k+2m$ 이다.

부호수 $-16$ 에서 부정부호 짝수형은 $k=2$ 이고 $m=1,2,3,\dots$ 마다 하나씩 있다. [Freedman 정리](freedman-theorem.md)에 따르면 이 형식들은 모두 단연결 위상다양체의 교차형식이다. 매끄러운 쪽에서는 K3 곡면이 $m=3$ 을 준다. $b_2=16$ 인 정부호형은 Donaldson 대각화 정리(Donaldson's diagonalization theorem)가 매끄러운 다양체에서 배제한다.

남은 것은 $m=1$ 과 $m=2$ 다. 10/8 정리는 $b_2\ge\frac{10}{8}\cdot 16+2=22$ 를 요구하므로 $8\cdot 2+2m\ge 22$, 곧 $m\ge 3$ 이다. 두 형식 모두 매끄러운 다양체에서 나오지 않고, K3 곡면이 부호수 $-16$ 에서 가장 작은 예다.

# 정의

## 진술

$X$ 가 닫힌 매끄러운 4 차원 [스핀](spin-structures.md) 다양체이고 $b_2(X)\gt 0$ 이면 다음이 성립한다.[^1]

$$
b_2(X)\ge\frac{10}{8}\thinspace\vert\sigma(X)\vert+2
$$

$\sigma(X)$ 는 교차형식의 부호수다. 단연결이고 형식이 $kE_8\oplus mH$ 꼴이며 $k\ne 0$ 이면 이 부등식은 $m\ge k+1$ 과 같다. 직관 절의 $k=2$ 에서 $m\ge 3$ 이다.

$b_2=0$ 인 경우는 빠진다. $S^4$ 는 $b_2=0$, $\sigma=0$ 이어서 부등식을 만족하지 않는다.

## 11/8 추측

**11/8 추측(11/8 conjecture)** 은 같은 가정에서 $b_2(X)\ge\frac{11}{8}\vert\sigma(X)\vert$ 라는 진술이다. 형식으로는 $2m\ge 3k$ 이다. K3 곡면은 $b_2=22$, $\vert\sigma\vert=16$ 이어서 등호가 성립한다. 10/8 정리는 $\frac{11}{8}$ 의 계수를 $\frac{10}{8}$ 으로 낮춘 판이다.

# 성질

## Pin(2) 대칭

$\mathrm{Pin}(2)$ 는 단위 사원수 가운데 $e^{i\theta}$ 와 $je^{i\theta}$ 꼴로 된 원소들의 군이다. 스핀 다양체에서는 스피너 다발 $W^\pm$ 가 사원수 직선다발이고 결정선다발이 자명하다. 그래서 [Seiberg–Witten 이론](seiberg-witten-theory.md)의 방정식은 게이지 변환의 $\mathrm U(1)$ 대칭 말고도 스피너에 오른쪽에서 $j$ 를 곱하고 접속을 켤레로 바꾸는 대칭을 가지며, 둘을 합친 대칭군이 $\mathrm{Pin}(2)$ 다.

## 증명의 요지

$b_1(X)=0$ 인 경우를 본다. Seiberg–Witten 방정식을 정의하는 사상을 유한차원 부분공간으로 근사하면 $\mathrm{Pin}(2)$ 동변 사상 하나가 나온다.

$$
f:(\mathbb H^{a}\oplus\tilde{\mathbb R}^{b})^+\to(\mathbb H^{a'}\oplus\tilde{\mathbb R}^{b'})^+
$$

$b^+(X)$ 는 교차형식의 양의 고윳값 개수다. $V^+$ 는 $V$ 에 무한원점을 붙인 구면이고, $\tilde{\mathbb R}$ 은 $j$ 가 $-1$ 로 작용하는 1 차원 표현이다. 차원의 차는 두 지표로 정해진다.

$$
a-a'=\mathrm{ind}\_{\mathbb H}D=-\frac{\sigma(X)}{16},\qquad b'-b=b^+(X)
$$

첫 식은 Rokhlin 정리의 증명에 쓰는 $\mathrm{ind}\_{\mathbb C}D=-\sigma/8$ 을 사원수 차원으로 쓴 것이다. 방향을 바꾸어 $\sigma\le 0$ 으로 두고 $k'=-\sigma/16$ 이라 하자.

Furuta 는 동변 [위상 K 이론](topological-k-theory.md)에서 이런 사상이 $\mathrm U(1)$ 의 고정점 집합 $(\tilde{\mathbb R}^{b})^+$ 위에서 선형 단사로 주어지고 $a\gt a'$ 이면 $b'-b\ge 2(a-a')+1$ 이어야 함을 보였다. 그러면 $b^+\ge 2k'+1$ 이다. $b_2=2b^+-\sigma$ 이므로 다음이 나온다.

$$
b_2\ge 4k'+2+16k'=\frac{10}{8}\vert\sigma\vert+2
$$

# 활용

- 매끄러운 구조의 존재 판정. Freedman 정리가 위상다양체로 만드는 짝수 교차형식 가운데 $m\le k$ 인 것은 매끄러운 구조를 갖지 않는다. 직관 절의 $2(-E_8)\oplus H$ 와 $2(-E_8)\oplus 2H$ 가 그 예다.
- [Rokhlin 정리](rokhlin-theorem.md)와 Donaldson 대각화 정리가 함께 쓰이는 판정. Rokhlin 정리가 $k$ 를 짝수로 제한하고, 대각화 정리가 $m=0$ 을 배제하며, 10/8 정리가 $m$ 의 하한을 $k+1$ 로 올린다.
- 경계가 있는 경우와 삼각분할. Manolescu 는 같은 $\mathrm{Pin}(2)$ 대칭으로 Seiberg–Witten Floer 호몰로지의 동변 판을 만들어, 경계가 호몰로지 3 구면인 스핀 다양체에 대한 10/8 꼴의 부등식을 세웠다. 같은 도구로 5 차원 이상의 위상다양체가 모두 단체 분할을 갖는 것은 아니라는 것을 증명했다.[^2]

[^1]: M. Furuta, Monopole equation and the 11/8-conjecture, *Mathematical Research Letters* **8** (2001), 279–291.
[^2]: C. Manolescu, Pin(2)-equivariant Seiberg–Witten Floer homology and the Triangulation Conjecture, *J. Amer. Math. Soc.* **29** (2016), 147–176.

# 연관 문서

## 선수지식

- [Rokhlin 정리](rokhlin-theorem.md)
- [Seiberg–Witten 이론](seiberg-witten-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #differential_geometry #topology #theorem
