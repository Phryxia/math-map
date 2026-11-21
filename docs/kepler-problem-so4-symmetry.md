# Kepler 문제의 SO(4) 대칭

# 개요

**Kepler 문제의 SO(4) 대칭(SO(4) symmetry of the Kepler problem)** 은 에너지가 같은 묶인 궤도들을 서로 옮기는 4 차원 회전군의 작용이다. 태양 둘레에서 에너지가 같은 궤도는 긴반지름이 같아, 원 궤도와 가늘고 긴 타원 궤도가 한 에너지에 함께 있다. 공간의 회전은 궤도의 모양을 바꾸지 못하므로 원을 타원으로 옮기지 못한다. 각운동량과 [Laplace–Runge–Lenz 벡터](laplace-runge-lenz-vector.md)의 성분 여섯 개가 4 차원 회전의 생성원처럼 서로 맞물리고, 이 여섯 개가 만드는 변환이 원을 타원으로 옮긴다.

# 직관

질량을 $1$, $GM=1$ 로 둔다. 에너지 $E=\frac12\vert\mathbf v\vert^2-1/r$ 가 $-\frac12$ 인 궤도는 긴반지름이 $a=-1/(2E)=1$ 이다. 그 가운데 둘을 고른다.

- 반지름 $1$ 인 원. $\mathbf x=(1,0,0)$, $\mathbf v=(0,1,0)$ 에서 각운동량은 $\mathbf L=(0,0,1)$ 이고 Laplace–Runge–Lenz 벡터는 $\mathbf A=\mathbf 0$ 이다.
- 이심률 $0.6$ 인 타원. 근일점 $\mathbf x=(0.4,0,0)$ 에서 속도는 $\mathbf v=(0,2,0)$ 이고, $E=2-1/0.4=-\frac12$ 이다. $\mathbf L=(0,0,0.8)$, $\mathbf A=(0.6,0,0)$ 이다.

회전은 $\vert\mathbf L\vert$ 를 바꾸지 않으므로 $\vert\mathbf L\vert=1$ 인 원을 $\vert\mathbf L\vert=0.8$ 인 타원으로 옮기지 못한다. 그런데 두 궤도 모두 $\vert\mathbf L\vert^2+\vert\mathbf A\vert^2=1$ 이다. $(\mathbf L,\mathbf A)$ 를 6 개 성분으로 보면 두 궤도가 같은 구 위에 있고, 그 구 위에서 $\mathbf L$ 의 길이를 $\mathbf A$ 쪽으로 넘기는 회전이 있으면 원이 타원으로 옮겨진다.

$\mathbf L$ 의 성분들은 Poisson 괄호로 공간의 회전을 만든다. $\mathbf A$ 의 성분을 더하면 괄호가 6 개 성분 안에서 닫히고, 그 괄호가 4 차원 공간의 회전의 괄호와 같다. $\mathbf A$ 의 성분이 만드는 흐름이 $\mathbf L$ 과 $\mathbf A$ 를 섞는 회전이다.

# 정의

## Poisson 괄호

Kepler 문제 $\mathbf x''=-\mathbf x/r^3$ 의 상태 $(\mathbf x,\mathbf v)$ 의 함수 $f,g$ 에 대해 다음을 Poisson 괄호(Poisson bracket)라 한다. [Hamilton 역학](hamiltonian-mechanics.md)에서 운동량이 $\mathbf v$ 인 경우다.

$$
\lbrace f,g\rbrace=\sum\_{i=1}^3\Bigl(\frac{\partial f}{\partial x\_i}\frac{\partial g}{\partial v\_i}-\frac{\partial f}{\partial v\_i}\frac{\partial g}{\partial x\_i}\Bigr)
$$

에너지 $H=\frac12\vert\mathbf v\vert^2-1/r$ 에 대해 $f$ 의 시간 도함수는 $\lbrace f,H\rbrace$ 이다. $\lbrace f,H\rbrace=0$ 이면 $f$ 는 보존량이고, $f$ 를 에너지 자리에 둔 방정식 $g'=\lbrace g,f\rbrace$ 의 흐름은 $H$ 를 바꾸지 않는다.

## 척도를 맞춘 Laplace–Runge–Lenz 벡터

$\mathbf A=\mathbf v\times\mathbf L-\mathbf x/r$ 이다. $H\lt 0$ 인 상태에서 다음 벡터를 **척도를 맞춘 Laplace–Runge–Lenz 벡터(scaled Laplace–Runge–Lenz vector)** 라 한다.

$$
\mathbf M=\frac{\mathbf A}{\sqrt{-2H}}
$$

직관 절의 두 궤도는 $-2H=1$ 이므로 $\mathbf M=\mathbf A$ 다.

## SO(4) 대칭

$\mathbf L$ 과 $\mathbf M$ 의 성분 여섯 개의 흐름이 만드는 군의 작용을 **Kepler 문제의 SO(4) 대칭** 이라 한다. 다음 성질 절의 괄호 관계에 따라 이 군은 4 차원 회전군 $\mathrm{SO}(4)$ 와 국소적으로 같다.

# 성질

## 괄호 관계

$\varepsilon\_{ijk}$ 를 Levi-Civita 기호(Levi-Civita symbol)라 하면 다음이 성립한다.[^1]

$$
\lbrace L\_i,L\_j\rbrace=\varepsilon\_{ijk}L\_k,\qquad\lbrace L\_i,A\_j\rbrace=\varepsilon\_{ijk}A\_k,\qquad\lbrace A\_i,A\_j\rbrace=-2H\thinspace\varepsilon\_{ijk}L\_k
$$

셋째 식의 $-2H$ 를 $\mathbf M$ 의 척도가 지우므로 $\lbrace M\_i,M\_j\rbrace=\varepsilon\_{ijk}L\_k$ 다. 4 차원 공간의 $(i,j)$ 평면 회전을 $R\_{ij}$ 라 하고 $L\_1,L\_2,L\_3$ 을 $R\_{23},R\_{31},R\_{12}$ 에, $M\_1,M\_2,M\_3$ 을 $R\_{14},R\_{24},R\_{34}$ 에 대응시키면, 이 괄호들이 $\mathrm{SO}(4)$ 의 [Lie 대수](lie-algebras.md) $\mathfrak{so}(4)$ 의 괄호와 일치한다.

## 두 개의 3 차원 회전

다음 두 벡터를 둔다.

$$
\mathbf J^{\pm}=\frac12(\mathbf L\pm\mathbf M)
$$

괄호 관계에서 다음이 나온다.

$$
\lbrace J^{+}\_i,J^{+}\_j\rbrace=\varepsilon\_{ijk}J^{+}\_k,\qquad\lbrace J^{-}\_i,J^{-}\_j\rbrace=\varepsilon\_{ijk}J^{-}\_k,\qquad\lbrace J^{+}\_i,J^{-}\_j\rbrace=0
$$

이것이 $\mathfrak{so}(4)\cong\mathfrak{so}(3)\oplus\mathfrak{so}(3)$ 이다.

## 궤도들의 공간

$\mathbf L\cdot\mathbf A=0$ 이고, Laplace–Runge–Lenz 벡터 문서의 $\vert\mathbf A\vert^2=1+2H\vert\mathbf L\vert^2$ 을 $-2H$ 로 나누면 다음이 나온다.

$$
\vert\mathbf L\vert^2+\vert\mathbf M\vert^2=\frac{1}{-2H}
$$

두 식을 합치면 $\vert\mathbf J^{+}\vert^2=\vert\mathbf J^{-}\vert^2=1/(-8H)$ 이다. 에너지가 $E\lt 0$ 인 궤도 하나는 $(\mathbf J^{+},\mathbf J^{-})$ 하나를 정하므로, 궤도들은 반지름이 $1/\sqrt{-8E}$ 인 두 구의 곱 $S^2\times S^2$ 에 놓인다. 충돌 궤도까지 넣으면 이 대응이 전단사이고, $\mathrm{SO}(3)\times\mathrm{SO}(3)$ 이 두 구를 각각 돌리는 작용이 궤도들 위에서 추이적이다.[^2] 직관 절의 원은 $\mathbf J^{\pm}=(0,0,\frac12)$ 이고 타원은 $\mathbf J^{\pm}=(\pm 0.3,0,0.4)$ 이다.

## Moser 정칙화

에너지를 $E\lt 0$ 로 고정하고 충돌 궤도를 이어 붙이면, Kepler 흐름은 3 차원 구면 $S^3$ 위의 측지선 흐름과 시간 척도를 바꾼 뒤 같아진다.[^3] $S^3$ 의 회전군이 $\mathrm{SO}(4)$ 이므로 위의 대칭이 구면의 회전으로 나타난다. 속도 공간을 입체 사영으로 $S^3$ 에 옮기는 것이 이 대응의 계산이다.

# 활용

- 수소 원자의 축퇴. 양자역학에서 같은 괄호 관계가 교환자로 성립하고, Pauli 는 이것으로 에너지 준위 $E\_n=-1/(2n^2)$(원자 단위)를 구했다.[^4] $\mathbf J^{\pm}$ 가 각각 스핀 $j$ 의 표현이고 $n=2j+1$ 이므로, 같은 에너지의 상태 수가 $(2j+1)^2=n^2$ 이다.
- Fock 의 운동량 공간 풀이. Fock 은 수소 원자의 운동량 공간 [Schrödinger 방정식](schrodinger-equation.md)을 입체 사영으로 $S^3$ 위의 구면조화함수 방정식으로 바꾸었다.[^5] 차수 $n-1$ 인 $S^3$ 의 구면조화함수 공간의 차원이 $n^2$ 이다.
- 섭동과 평균화. 역제곱 힘에 작은 힘이 더해지면, 궤도의 느린 변화가 $S^2\times S^2$ 위의 흐름으로 적힌다. 근일점 이동과 [Bertrand 정리](bertrand-orbit-theorem.md)의 계산이 이 흐름에서 나온다.

[^1]: V. Guillemin, S. Sternberg, *Variations on a Theme by Kepler*, AMS Colloquium Publications 42 (1990), 1–2 장.

[^2]: Guillemin, Sternberg, 같은 책. 에너지 면을 흐름으로 나눈 공간이 S² × S² 라는 결과와 충돌 궤도의 처리가 있다.

[^3]: J. Moser, "Regularization of Kepler's problem and the averaging method on a manifold", *Communications on Pure and Applied Mathematics* 23 (1970), 609–636.

[^4]: W. Pauli, "Über das Wasserstoffspektrum vom Standpunkt der neuen Quantenmechanik", *Zeitschrift für Physik* 36 (1926), 336–363.

[^5]: V. Fock, "Zur Theorie des Wasserstoffatoms", *Zeitschrift für Physik* 98 (1935), 145–154.

# 연관 문서

## 선수지식

- [Laplace–Runge–Lenz 벡터](laplace-runge-lenz-vector.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry #algebra
