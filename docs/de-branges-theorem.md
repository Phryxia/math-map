# de Branges 정리

# 개요

**de Branges 정리(de Branges' theorem)** 는 단위원판에서 일대일이고 $f(0)=0$, $f'(0)=1$ 인 정칙함수의 $n$ 번째 Taylor 계수 $a_n$ 이 모든 $n$ 에서 $\vert a_n\vert\le n$ 을 만족한다는 정리다. 원판을 어떤 영역으로 일대일로 옮기는 함수를 거듭제곱급수로 쓰면, 영역의 모양이 바뀔 때 계수가 얼마나 커질 수 있는지가 물음이 된다. 이 정리는 계수가 가장 큰 함수가 원판을 평면에서 반직선 하나를 뺀 영역으로 옮기는 Koebe 함수라는 것을 보이고, 그 계수 $n$ 을 상한으로 준다.

# 직관

[Riemann 사상정리](riemann-mapping-theorem.md)는 평면 전체가 아닌 단순연결 영역 $\Omega\ni 0$ 을 원판으로 옮기는 전단사 정칙함수를 준다. 그 역함수 $g:\mathbb D\to\Omega$ 를 $g(0)=0$ 이 되게 고르고 $g'(0)$ 으로 나누면 $f(z)=z+a_2z^2+\cdots$ 꼴이 되고, 영역의 모양은 계수 $a_2,a_3,\dots$ 에 담긴다.

일대일이라는 조건이 계수를 묶는다. $f(z)=z+az^2$ 은 $f'(z)=1+2az$ 이므로 $\vert a\vert\gt 1/2$ 이면 원판 안의 점 $-1/(2a)$ 에서 도함수가 $0$ 이 되고, 그 근처에서 두 점이 같은 값으로 간다. 그래서 이 꼴의 함수가 일대일이려면 $\vert a\vert\le 1/2$ 이어야 한다.

계수가 큰 쪽의 예가 다음 함수다.

$$
k(z)=\frac{z}{(1-z)^2}=z+2z^2+3z^3+\cdots=\frac14\left(\left(\frac{1+z}{1-z}\right)^2-1\right)
$$

$(1+z)/(1-z)$ 는 원판을 오른쪽 반평면으로 옮기고, 제곱하면 음의 실수축 $(-\infty,0\rbrack$ 을 뺀 평면이 된다. $1$ 을 빼고 $4$ 로 나누면 상은 반직선 $(-\infty,-1/4\rbrack$ 을 뺀 평면이다. $k$ 는 원판을 일대일로 옮기면서 $n$ 번째 계수가 $n$ 이고, de Branges 정리는 이보다 큰 계수가 없다는 것이다.

# 정의

원판 $\mathbb D$ 에서 일대일인 정칙함수를 **단엽 함수(univalent function)** 라 한다. $f(0)=0$, $f'(0)=1$ 인 단엽 함수 전체를 $\mathcal S$ 로 쓴다. 직관 절의 Riemann 사상을 정규화한 $f$ 가 $\mathcal S$ 에 속하고, $z+az^2$ 은 $\vert a\vert\le 1/2$ 일 때 $\mathcal S$ 에 속한다.

직관 절의 $k$ 를 **Koebe 함수(Koebe function)** 라 한다. 실수 $\theta$ 에 대해 $e^{-i\theta}k(e^{i\theta}z)$ 도 $\mathcal S$ 에 속하고, 계수는 $ne^{i(n-1)\theta}$ 로 절댓값이 $n$ 이다. 이것들을 Koebe 함수의 회전이라 한다.

# 성질

## 넓이 정리

$\vert\zeta\vert\gt 1$ 에서 일대일인 정칙함수가 다음 꼴이라 하자.

$$
h(\zeta)=\zeta+b_0+b_1\zeta^{-1}+b_2\zeta^{-2}+\cdots
$$

그러면 다음이 성립하고, 이것이 **넓이 정리(area theorem)** 다.

$$
\sum_{n=1}^{\infty}n\vert b_n\vert^2\le 1
$$

$r\gt 1$ 일 때 원 $\vert\zeta\vert=r$ 의 상이 둘러싼 넓이를 [Green 정리](greens-theorem.md)로 계산하면 $\pi\bigl(r^2-\sum n\vert b_n\vert^2r^{-2n}\bigr)$ 이다. 넓이는 $0$ 이상이므로 $r\to 1$ 로 보내면 부등식이 나온다.

## Bieberbach 의 둘째 계수

$f\in\mathcal S$ 이면 $\vert a_2\vert\le 2$ 이고, 등호는 $f$ 가 Koebe 함수의 회전일 때뿐이다.[^1] $f(z^2)$ 의 제곱근 $z\sqrt{1+a_2z^2+\cdots}$ 도 원판에서 일대일이고, $\zeta$ 를 $1/\zeta$ 로 바꾸어 역수를 취하면 다음 함수가 $\vert\zeta\vert\gt 1$ 에서 일대일이다.

$$
h(\zeta)=\zeta-\frac{a_2}{2}\zeta^{-1}+\cdots
$$

넓이 정리에서 $\vert a_2/2\vert\le 1$ 이다.

## Koebe 사분의 일 정리

$f\in\mathcal S$ 이면 $f(\mathbb D)$ 는 반지름 $1/4$ 인 원판 $\lbrace\vert w\vert\lt 1/4\rbrace$ 을 포함한다. 이것이 **Koebe 사분의 일 정리(Koebe quarter theorem)** 다. $w$ 가 $f(\mathbb D)$ 밖에 있으면 $wf/(w-f)$ 도 $\mathcal S$ 에 속하고 그 둘째 계수가 $a_2+1/w$ 이므로, 둘째 계수 정리에서 $\vert 1/w\vert\le\vert a_2\vert+2\le 4$ 다. Koebe 함수는 $-1/4$ 을 값으로 갖지 않으므로 $1/4$ 은 더 키울 수 없다.

## 왜곡 정리

$f\in\mathcal S$ 이고 $\vert z\vert=r\lt 1$ 이면 다음이 성립하고, 등호는 Koebe 함수의 회전에서 나온다.

$$
\frac{r}{(1+r)^2}\le\vert f(z)\vert\le\frac{r}{(1-r)^2}
$$

둘째 계수 정리를 $f$ 에 자기동형을 합성한 함수들에 쓰면 다음이 나온다.

$$
\left\vert\frac{zf''(z)}{f'(z)}-\frac{2r^2}{1-r^2}\right\vert\le\frac{4r}{1-r^2}
$$

이 부등식을 반지름 방향으로 두 번 적분하면 왜곡 정리가 나온다.

## de Branges 정리

$f\in\mathcal S$ 이면 모든 $n\ge 2$ 에서 $\vert a_n\vert\le n$ 이고, 어느 하나의 $n$ 에서 등호가 성립하면 $f$ 는 Koebe 함수의 회전이다.[^2] Bieberbach 가 1916 년에 $n=2$ 를 증명하며 이 부등식을 추측했고, 이 추측을 **Bieberbach 추측(Bieberbach conjecture)** 이라 한다. Löwner 가 $n=3$ 을 증명했고[^3], de Branges 가 1985 년에 모든 $n$ 을 증명했다.

증명은 계수 대신 로그 계수를 다룬다. $\log(f(z)/z)=2\sum_k\gamma_kz^k$ 로 두면 Milin 추측(Milin conjecture)은 다음 부등식이고, 이것이 성립하면 Bieberbach 추측이 따라 나온다.

$$
\sum_{k=1}^{n}(n-k+1)\left(k\vert\gamma_k\vert^2-\frac1k\right)\le 0
$$

de Branges 는 $\mathcal S$ 의 함수를 영역이 커지는 단엽 함수들의 족에 넣고, 그 족이 만족하는 Löwner 미분방정식(Löwner differential equation)을 따라 이 합이 줄어든다는 것을 보였다. 줄어든다는 것의 증명에 Jacobi [직교다항식](orthogonal-polynomials.md)의 합이 음이 아니라는 Askey–Gasper 부등식(Askey–Gasper inequality)을 쓴다.

# 활용

- 등각 반지름의 추정. 단순연결 영역 $\Omega$ 의 점 $z_0$ 에서 경계까지의 거리를 $\delta$, $\Omega$ 를 원판으로 옮기는 Riemann 사상 $\psi$ 에 대해 $1/\vert\psi'(z_0)\vert$ 를 등각 반지름(conformal radius) $R$ 이라 하면 $\delta\le R\le 4\delta$ 다. 앞의 부등식은 [등각사상](conformal-mapping.md)의 Schwarz 보조정리에서, 뒤의 부등식은 Koebe 사분의 일 정리에서 나온다.
- 정규족. 왜곡 정리에서 $\mathcal S$ 는 원판의 콤팩트 부분집합에서 고르게 유계이므로 정규족이고, 극한도 $\mathcal S$ 에 속한다. 그래서 $\mathcal S$ 위의 계수 범함수가 최댓값을 갖고, 극값 함수를 찾는 문제가 성립한다.
- Löwner 방정식과 확률적 성장. de Branges 의 증명에 쓴 Löwner 방정식에서 구동 함수를 [Brown 운동](brownian-motion.md)으로 두면 Schramm–Loewner 진화(Schramm–Loewner evolution, SLE)가 되고, 이것으로 [균일 신장 트리](uniform-spanning-tree.md)의 경로 같은 평면 무작위 곡선의 축척 극한을 기술한다.

[^1]: L. Bieberbach, "Über die Koeffizienten derjenigen Potenzreihen, welche eine schlichte Abbildung des Einheitskreises vermitteln", Sitzungsberichte der Preussischen Akademie der Wissenschaften (1916).
[^2]: L. de Branges, "A proof of the Bieberbach conjecture", Acta Mathematica 154 (1985).
[^3]: K. Löwner, "Untersuchungen über schlichte konforme Abbildungen des Einheitskreises. I", Mathematische Annalen 89 (1923).

# 연관 문서

## 선수지식

- [Riemann 사상정리](riemann-mapping-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis
