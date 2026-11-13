# Brègman 부등식

# 개요

**Brègman 부등식(Brègman's inequality)** 은 성분이 $0$ 과 $1$ 인 정사각행렬의 [영구식](permanent.md)이 각 행의 $1$ 의 개수만으로 정해지는 값 이하라는 부등식이다. 학생 $n$ 명이 각자 맡을 수 있는 과제 몇 개를 적어 냈을 때, 학생마다 과제 하나씩 서로 겹치지 않게 나눠 주는 방법이 최대 몇 가지인지가 이런 물음이다. 학생마다 고를 수 있는 수를 곱하면 겹치는 배정까지 세어 상한이 크다. Brègman 부등식은 학생을 무작위 순서로 세워 앞사람이 가져간 과제를 빼고 세는 것으로 정확한 상한을 준다.

# 직관

학생 $3$ 명이 모두 과제 $3$ 개를 다 맡을 수 있으면 배정은 $3! = 6$ 가지다. 학생마다 고를 수 있는 수 $3$ 을 곱한 $27$ 은 두 학생이 같은 과제를 받는 경우까지 센다. 학생을 순서대로 세우면 첫째는 $3$ 개, 둘째는 $2$ 개, 셋째는 $1$ 개 가운데 고르므로 $3 \cdot 2 \cdot 1 = 6$ 이 정확하다.

학생마다 적어 낸 과제가 다르면 순서에 따라 남는 수가 달라진다. 배정 하나를 고정하고 학생 $i$ 가 적어 낸 과제 $r_i$ 개를 보면, 그 과제들은 배정에서 학생 $r_i$ 명이 하나씩 받는다. 학생을 무작위 순서로 세우면 학생 $i$ 는 이 $r_i$ 명 가운데 몇째로 서는지가 고르게 정해진다. 그래서 학생 $i$ 의 차례에 남은 과제 수는 $1, 2, \dots, r_i$ 가운데 하나로 고르게 정해진다.

남은 수의 로그를 평균하면 $\frac{1}{r_i}\log r_i!$ 이고, 이것을 [Shannon 엔트로피](entropy.md)로 모으면 배정 수의 로그를 위에서 누르는 값이 된다. 학생 셋이 모두 과제 셋을 적은 경우에는 $(3!)^{1/3}$ 을 세 번 곱한 $6$ 이 나와 정확하다.

# 정의

## 행 합

$n \times n$ 행렬 $A$ 의 성분이 $0$ 과 $1$ 이면 $i$ 행의 $1$ 의 개수를 $i$ 행의 **행 합(row sum)** $r_i$ 라 한다. $A$ 의 영구식 $\mathrm{perm}\thinspace A$ 는 $A_{i\sigma(i)} = 1$ 이 모든 $i$ 에서 성립하는 순열 $\sigma$ 의 개수이고, 직관 절의 배정의 수다. 직관 절의 첫 예는 모든 성분이 $1$ 인 $3 \times 3$ 행렬이고 $r_1 = r_2 = r_3 = 3$ 이다.

# 성질

## Brègman 부등식

성분이 $0$ 과 $1$ 이고 행 합이 $r_1, \dots, r_n$ 인 $n \times n$ 행렬 $A$ 는 다음을 만족한다[^1].

$$
\mathrm{perm}\thinspace A \le \prod_{i=1}^n(r_i!)^{1/r_i}
$$

Minc 가 1963 년에 추측했고 Brègman 이 1973 년에 증명했다.

증명의 요지[^2]. $A_{i\sigma(i)} = 1$ 인 순열 $\sigma$ 를 고르게 뽑으면 $H(\sigma) = \log\mathrm{perm}\thinspace A$ 다. 행의 순서 $\tau$ 를 고르게 뽑아 연쇄법칙을 쓰면, $H(\sigma)$ 는 $\tau$ 에서 $i$ 보다 앞선 행들의 $\sigma$ 값을 알 때 $\sigma(i)$ 의 엔트로피를 $i$ 에 대해 더한 것이다. 그 엔트로피는 남은 후보 수 $N_i$ 의 로그 이하다.

$\sigma$ 를 고정하면 $N_i$ 는 직관 절처럼 $\lbrace 1, \dots, r_i\rbrace$ 에서 고르게 분포하므로 $E\lbrack\log N_i\rbrack = \frac{1}{r_i}\log r_i!$ 이다. 이것을 $i$ 에 대해 더하면 부등식이 나온다.

## 등호

$A$ 가 행과 열을 바꾸어 모든 성분이 $1$ 인 정사각 블록들을 대각에 놓은 꼴이면 등호가 성립한다. 크기 $r$ 인 블록 하나의 영구식이 $r! = \big((r!)^{1/r}\big)^r$ 이기 때문이다.

## 정칙 이분 그래프의 완전 매칭

두 쪽에 정점이 $n$ 개씩 있고 모든 정점의 차수가 $d$ 인 이분 그래프의 [매칭](matchings.md) 가운데 완전 매칭은 $(d!)^{n/d}$ 개 이하다. 이분 그래프의 결합행렬에 Brègman 부등식을 쓰면 나오고, $d$ 가 $n$ 을 나누면 $K_{d,d}$ 를 $n/d$ 개 모은 그래프에서 등호다.

# 활용

- 영구식의 상한과 하한. van der Waerden 부등식(van der Waerden inequality)은 행과 열의 합이 $1$ 인 행렬의 영구식의 하한 $n!/n^n$ 을 준다. 모든 행 합이 $d$ 인 $0$-$1$ 행렬을 $d$ 로 나누어 두 부등식을 함께 쓰면 $d^n n!/n^n \le \mathrm{perm}\thinspace A \le (d!)^{n/d}$ 이다.
- 이분 그래프가 아닌 그래프. Kahn 과 Lovász 가 증명한 판본은 일반 그래프의 완전 매칭의 수를 정점 차수로 누른다[^3].

[^1]: L. M. Brègman, "Some properties of nonnegative matrices and their permanents", Soviet Mathematics Doklady 14 (1973), 945–949.
[^2]: J. Radhakrishnan, "An entropy proof of Bregman's theorem", Journal of Combinatorial Theory Series A 77 (1997), 161–164.
[^3]: N. Alon, S. Friedland, "The maximum number of perfect matchings in graphs with a given degree sequence", Electronic Journal of Combinatorics 15 (2008), N13.

# 연관 문서

## 선수지식

- [영구식](permanent.md)
- [Shannon 엔트로피](entropy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #information_theory #linear_algebra
